---
layout: base
title:  'CoNLL-U Plus Format'
udver: '2'
---

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
CoNLL-U files ([see specification](format.html)). A CoNLL-U Plus file may contain any
subset of them (or none of them, although for stand-off annotation of UD files,
at least the ID column is typically needed).

A valid CoNLL-U file thus becomes valid CoNLL-U Plus file when the comment listing
its columns is inserted as the first line (here the column names are separated by
a simple space character instead of a TAB):

<pre>
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

</pre>

Note that the comment can safely reside in a CoNLL-U file and it stays a valid
CoNLL-U file as long as no columns are added, reordered or removed. However, we
intentionally do not make the comment mandatory in basic CoNLL-U files.
We want to be able to simply split a basic CoNLL-U file on a sentence boundary
and get two valid CoNLL-U files—something that is not possible with CoNLL-U Plus.

Any column names other than the original ten are considered project-specific and
must use a namespace identifier that distinguishes the columns of the given project
from columns defined by other initiatives, should they eventually
end up in the same file. A column name consists of uppercase English letters
and of a colon as the namespace delimiter:

    # global.columns = ID FORM PARSEME:MWE

The internal requirements and semantics of the new column must be documented by
the initiative that defined the column. The only global limitation specified by
CoNLL-U Plus is that the column does not contain a TAB, CR or LF character (but it may
contain other whitespace characters if allowed by the column specification).
In addition:

* The underscore `_`, when it occurs alone in the field, is reserved for underspecified
  annotations. It can be used in incomplete annotations or in blind versions of the
  annotated files. (Note that in the FORM and LEMMA fields of the basic CoNLL-U file,
  the underscore may also mean a literal underscore appearing in the underlying text.)
* If an extension needs to distinguish unknown values from known but empty values, it is
  recommended that the asterisk `*` is used for the empty value. For example, the
  `PARSEME:MWE` column uses the asterisk to indicate that a token does not belong to
  any multi-word expression, while the underscore is used in blind files where multi-word
  expression annotation is not provided, that is, one does not know whether the token
  belongs to a MWE or not. Note that the core UD columns use the underscore in both
  situations.
* The use of the underscore `_` (and of the asterisk `*`) is unconstrained when they
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
called `source_sent_id`, where the id string contains a source format specifier,
followed by three of the reference parts discussed above:
release id, file path and sentence id.
The format specifier is a single word consisting of lowercase English letters.
As long as we are referring to a CoNLL-U file, the format specifier is always
“conllu”. This allows us to distinguish references to source corpora that are
not saved in CoNLL-U; nevertheless, we do not define the other formats here
and whoever uses them must also document them.

These four parts are separated by spaces,
not slashes, because the release id itself contains slashes.

The `source_sent_id` attribute is optional and may be omitted if the file belongs
to a standalone corpus rather than a stand-off annotation layer. On the other hand,
the `sent_id` attribute is required even if there is a `source_sent_id` attribute
in the same sentence. It is not even required that the value of `sent_id` is identical
to the last part of `source_sent_id`, although it often makes sense and may be
required by individual annotation projects. The only requirement is that the value
of `sent_id` is unique—at least within the file in which it appears, but a project
may require that it is unique across a set of files that constitute a corpus.
Furthermore, the general [requirements](format.html#sentence-boundaries-and-comments)
of the basic CoNLL-U format also apply (e.g., the sentence id cannot contain whitespace
characters).

<pre>
# global.columns = ID FORM UPOS HEAD DEPREL MISC PARSEME:MWE
# source_sent_id = conllu http://hdl.handle.net/11234/1-2837 UD_German-GSD/de_gsd-ud-train.conllu train-s1682
# sent_id = train-s1682
# text = Der CDU-Politiker strebt einen einheitlichen Wohnungsmarkt an, auf dem sich die Preise an der ortsüblichen Vergleichsmiete orientieren.
1	Der	DET	2	det	_	*
2	CDU	PROPN	4	compound	SpaceAfter=No	*
3	-	PUNCT	2	punct	SpaceAfter=No	*
4	Politiker	NOUN	5	nsubj	_	*
5	strebt	VERB	0	root	_	2:VPC.full
6	einen	DET	8	det	_	*
7	einheitlichen	ADJ	8	amod	_	*
8	Wohnungsmarkt	NOUN	5	obj	_	*
9	an	ADP	5	compound:prt	SpaceAfter=No	2
10	,	PUNCT	5	punct	_	*
11	auf	ADP	12	case	_	*
12	dem	PRON	20	obl	_	*
13	sich	PRON	20	obj	_	1:IRV
14	die	DET	15	det	_	*
15	Preise	NOUN	20	nsubj	_	*
16	an	ADP	19	case	_	*
17	der	DET	19	det	_	*
18	ortsüblichen	ADJ	19	amod	_	*
19	Vergleichsmiete	NOUN	20	obl	_	*
20	orientieren	VERB	8	acl	SpaceAfter=No	1
21	.	PUNCT	5	punct	_	*

</pre>

### Cross-reference to another source

Other cross-references are in principle similar to referring to UD treebanks.
Instead of UD release handle, another URI identifying the download site can be
used; however, it must permanently refer to the same version of the corpus, i.e.,
the corpus must be immutable. Using [LINDAT/CLARIN](https://lindat.mff.cuni.cz/repository/xmlui/)
handles is highly recommended.

If the source treebank is local or if there is no source treebank, the release id
is a single period (`.`).

If the release id identifies just one file, the file path is also a single period (`.`).

The sentence id part of the reference string must be identical to the `sent_id` in the
CoNLL-U file we are referring to.

# Known extensions of UD

A few projects ran before this specification was created; their data probably do not
comply with this specification.

* [Universal Proposition Banks](https://github.com/System-T/UniversalPropositions) (IBM Research; see also [issue #344](https://github.com/UniversalDependencies/docs/issues/344))

One extension was based on an early draft of this specification.
It is not 100% compliant with the final version but it is close:

* PARSEME annotation of [multi-word expressions](http://multiword.sourceforge.net/PHITE.php?sitesig=CONF&page=CONF_04_LAW-MWE-CxG_2018___lb__COLING__rb__&subpage=CONF_45_Format_specification)

Planned extensions:

* [Unimorph-style](https://unimorph.github.io/) annotation of morphology in the UD treebanks
* Several projects on named-entity annotation (see also [issue #562](https://github.com/UniversalDependencies/docs/issues/562))
* Various semantic extensions

----------

<b>Related work:</b> The CoNLL-* file formats date back to the 2006 task (CoNLL-X conference,
hence the format was sometimes called CoNLL-X and sometimes CoNLL-ST (for _shared task_) or
simply CoNLL. Before CoNLL-U (universal dependencies) and CoNLL-U Plus, some extensions of the
format were proposed by Straňák and Štěpánek (2010) [Pavel Straňák and Jan Štěpánek. 2010.
[Representing Layered and Structured Data in the CoNLL-ST Format](http://ufal.mff.cuni.cz/biblio/servlet/File?field=File&id=1081727559264548387).
In: _Proceedings of the Second International Conference on Global Interoperability for Language Resources,_
pp. 143–152, Hong Kong, China, ISBN 978-962-442-323-5.]
