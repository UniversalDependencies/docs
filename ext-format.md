---
layout: base
title:  'CoNLL-U Plus Format'
udver: '2'
---


<strong style='color:red'>DISCLAIMER:</strong> As of 2018-09-07,
this page is work in progress and the contents may change in the near future.

<!-- This specification was drafted in collaboration between the UD core group (Joakim Nivre, Dan Zeman, Filip Ginter) and the PARSEME initiative (Agata Savary, Carlos Ramisch, Silvio Cordeiro). -->
<!-- Minutes from the Skype talk 2018-01-17 https://docs.google.com/document/d/108tEbDZyngpc-zqfy7phnSxRVaEzmiHDTzzRLINVgUM/edit?usp=sharing -->
<!-- UD-to-Any format interface (CoNLL-U Plus first specification) https://docs.google.com/document/d/1_P5FK9yTRcTPEXU_iQ4SNvgUHKIWoUG9J5hk5B45584/edit#heading=h.kpu17fj0h6x7 -->

# CoNLL-U Plus Format

In theory, the [basic CoNLL-U format](format.html) can encode any kind of annotation
using a combination of the sentence-level comments and the MISC attributes. However,
in projects that systematically add a new annotation layer to existing UD treebanks
it becomes impractical to pack everything into these two places.

We define a general technique of extending the CoNLL-U format, with the hope that
various extensions will remain as compatible with each other as possible. We call
this generic format “CoNLL-U Plus,” with the filename extension `.conllup`.

Note that this page is not about the [enhanced UD representation](/u/overview/enhanced-syntax.html),
which, despite being arguably an extension in its own right, is part of the standard
CoNLL-U format.

## New columns

The extension is actually very simple. While a CoNLL-U file has always precisely ten
columns separated by TAB characters, a CoNLL-U Plus file can have any non-zero number
of columns. In addition, the first line must be a sentence-level comment (i.e., starting
with a `#` character) that lists the names of the columns used in this file.
There are ten predefined column names that identify the original columns of the core
CoNLL-U files ([see specification](format.html)). A CoNLL-U file may contain any
subset of them (or none of them, making the file a completely stand-off annotation
layer).

A valid CoNLL-U file thus becomes valid CoNLL-U Plus file when the comment listing
its columns is inserted as the first line (here the column names are separated by
a simple space character instead of a TAB):

    # global.columns = ID FORM LEMMA UPOS XPOS FEATS HEAD DEPREL DEPS MISC
    # newdoc id = mf920901-001
    # newpar id = mf920901-001-p1
    # sent_id = mf920901-001-p1s1A
    # text = Slovenská ústava: pro i proti
    # text_en = Slovak constitution: pros and cons
    1   Slovenská   slovenský   ADJ     AAFS1----1A---- Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos 2 amod _ _
    2   ústava      ústava      NOUN    NNFS1-----A---- Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos 0 root _ SpaceAfter=No
    3   :           :           PUNCT   Z:------------- _          2       punct   _       _
    4   pro         pro         ADP     RR--4---------- Case=Acc   2       appos   _       LId=pro-1
    5   i           i           CCONJ   J^------------- _          6       cc      _       LId=i-1
    6   proti       proti       ADP     RR--3---------- Case=Dat   4       conj    _       LId=proti-1


Note that the comment can safely reside in a CoNLL-U file and it stays a valid
CoNLL-U file as long as no columns are added, reordered or removed. However, we
intentionally do not make the comment mandatory in basic CoNLL-U files.
We want to be able to simply split a basic CoNLL-U file on a sentence boundary
and get two valid CoNLL-U files—something that is not possible with CoNLL-U Plus.

Any column names other than the original ten are considered project-specific.
It is advisable though that each project uses a namespace identifier to distinguish
its own columns from columns defined by other initiatives, should they eventually
end up in the same file. A column name may consist of uppercase English letters
and of a colon as the namespace delimiter:

    # ID FORM PARSEME:MWE

The internal requirements and semantics of the new column must be documented by
the initiative that defined the column. The only global limitation specified by
CoNLL-U Plus is that the column does not contain a TAB, CR or LF character (but it may
contain other whitespace characters if allowed by the column specification).
In addition:

* The underscore `_`, when it occurs alone in the field, is reserved for underspecified
  annotations. It can be used in incomplete annotations or in blind versions of the
  annotated files. (Note that in the FORM and LEMMA fields of the basic CoNLL-U file,
  the underscore may also mean a literal underscore appearing in the underlying text.)
* The asterisk `*`, when it occurs alone in a field, is reserved for empty annotations,
  which are different from underspecified. This concerns sporadic annotations (where
  not necessarily all tokens receive annotation).
* The use of the underscore `_` and of the asterisk `*` is unconstrained when they
  occur with other characters (e.g. in feature names or values, as in `spec_char=*`).

If the file is an extension of an existing UD treebank, it is assumed that sentence-level
metadata defined in UD (in particular, the `text` attribute), as well as the contents of
the core UD columns, is identical to the source treebank.

## Cross-reference to a UD treebank

In case of stand-off annotation, it becomes crucial to be able to identify the underlying UD file.
Any official UD release is identified by its permanent URI in the LINDAT/CLARIN repository,
e.g.,

* `http://hdl.handle.net/11234/1-1983` for UD 2.0.
* `http://hdl.handle.net/11234/1-2515` for UD 2.1.

Within a release, each file can be identified by a path.
For UD releases, the path consists of the name of the treebank folder
(corresponding to the name of the Github repository, e.g., `UD_German-PUD`)
and of the actual name of the file
(e.g., `de_pud-ud-test.conllu`).
The delimiter character is always the slash and never the backslash,
regardless of operating system:
`UD_German-PUD/de_pud-ud-test.conllu`.

Within a file, each sentence has a unique sentence id
(UD actually requires that the sentence id be unique treebank-wide,
but for easier processing we keep the filename in the identification string).
Within a sentence, the token/word id from the `ID` column unambiguously
points to a tree node or a multi-word token.

In the CoNLL-U Plus file, the reference appears in a sentence-level attribute
called `source_sent_id`, where the id string contains three parts discussed above:
release id, file path and sentence id. These three parts are separated by spaces,
not slashes, because the release id itself contains slashes.

### Cross-reference to another source

Other cross-references are in principle similar to referring to UD treebanks.
Instead of UD release handle, another URI identifying the download site can be
used; however, it must permanently refer to the same version of the corpus, i.e.,
the corpus must be immutable. Using [LINDAT/CLARIN](https://lindat.mff.cuni.cz/repository/xmlui/)
handles is highly recommended.

If the source treebank is local or if there is no source treebank, the release id
is a single period (`.`).

If the release id identifies just one file, the file path is also a single period (`.`).

The sentence id must be identical to the `sent_id` in the corresponding source CoNLL-U file.
If there is no source, the sentence id must be unique corpus-wide, just like in
Universal Dependencies.

# Known extensions of UD

A few projects ran before this specification was created; their data probably do not
comply with this specification.

* Universal Semantic Roles (IBM Research, Alan Akbik et al.)

New extensions:

* PARSEME annotation of [multi-word expressions](http://multiword.sourceforge.net/PHITE.php?sitesig=CONF&page=CONF_04_LAW-MWE-CxG_2018___lb__COLING__rb__&subpage=CONF_45_Format_specification)

Planned extensions:

* Unimorph annotation of morphology
* Several projects on named-entity annotation
* Various semantic extensions
