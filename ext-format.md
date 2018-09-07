---
layout: base
title:  'CoNLL-U Plus Format'
udver: '2'
---


# CoNLL-U Plus Format

In theory, the [basic CoNLL-U format](format.html) can encode any kind of annotation
using a combination of the sentence-level comments and the MISC attributes. However,
in projects that systematically add a new annotation layer to existing UD treebanks
it becomes impractical to pack everything into these two places.

We define a general technique of extending the CoNLL-U format, with the hope that
various extensions will remain as compatible with each other as possible. We call
this generic format “CoNLL-U Plus,” with the filename extension `.conllup`.

## New columns

The extension is actually very simple. While a CoNLL-U file has always precisely ten
columns separated by TAB characters, a CoNLL-U Plus file can have any non-zero number
of columns. In addition, the first line must be a sentence-level comment (i.e., starting
with a `#` character) that lists the names of the columns used in this file.
There ten predefined column names that identify the original columns of the core
CoNLL-U files ([see specification](format.html)). A CoNLL-U file may contain any
subset of them (or none of them, making the file a completely stand-off annotation
layer).

A valid CoNLL-U file thus becomes valid CoNLL-U Plus file when the comment listing
its columns is inserted as the first line:

    # ID FORM LEMMA UPOS XPOS FEATS HEAD DEPREL DEPS MISC
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
We want to be able to simply split a basic CoNLL-U file on sentence boundary
and get two valid CoNLL-U files—something that is not possible with CoNLL-U Plus.

Any column names other than the original ten are considered project-specific.
It is advisable though that each project uses a namespace identifier to distinguish
its own columns from columns defined by other initiatives, should they eventually
end up in the same file. A column name may consist of uppercase English letters
and of a colon as the namespace delimiter:

    # ID FORM PARSEME:MWE

## Cross-reference to a UD treebank

In case of stand-off annotation, it becomes crucial to be able to identify the underlying UD file.
Any official UD release is permanently identified by its permanent URI in the LINDAT/CLARIN repository,
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
Within a sentence, the token/word id from the `ID` column uniquely
points to a tree node or a multi-word token.
