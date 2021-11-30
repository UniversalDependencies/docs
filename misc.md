---
layout: base
title:  'MISC attributes'
udver: '2'
---

# MISC attributes in CoNLL-U

The tenth column in the [CoNLL-U format](format.html#miscellaneous) is labeled MISC,
standing for “miscellaneous”. It is intended for any additional annotation that data
providers want to store at the token level. With very few exceptions, its contents is
optional from the UD perspective. Nevertheless, certain types of annotation are used
in multiple UD treebanks, and it is desirable that they are annotated in the same
fashion as much as possible. This page serves as a notice board to raise awareness
about MISC attributes that already exist, their form and purpose. If other treebanks
add annotations of a kind described here, it is recommended that they use the same
attribute names and values as much as possible.

## Basic format

A single underscore (“_”) in MISC signals that there is no extra annotation. The column
cannot be empty and it cannot contain certain characters (TAB, CR, LF, other control
characters). It can contain spaces (“ ”) but it cannot start or end with a space.

The vertical bar (“|”) is interpreted as separator of individual MISC annotations where
applicable, so it is not recommended to use it unescaped in an annotation. Nevertheless,
a CoNLL-U file is not considered invalid if it contains e.g. multiple consecutive
vertical bars (“|||”), a leading or trailing “|” in MISC etc.

It is recommended that individual annotations separated by vertical bars are
Attribute=Value pairs, similar to the FEATS column of CoNLL-U. However, it is not
forbidden to have a “|”-delimited annotation that does not contain “=”, or even is empty
(as long as the whole MISC is not empty). Unlike in FEATS, attributes do not have to be
sorted alphabetically and it is allowed to have the same attribute multiple times (with
the same or with different values) if it makes sense (but it rarely does). Note that
tools processing CoNLL-U data may process some MISC annotations and leave others intact;
however, it may not be obvious what “leaving intact” means if you have unnamed attributes,
or multiple instances of the same attribute where the order of the instances is significant
for you. It is thus safer to avoid such practices.

## Known attributes

MISC attributes already attested in UD treebanks are listed here in alphabetical order
together with brief documentation (and possibly with links to additional information).

### Lang

Language of the current token, if different from the main language of the file (code switching).
The value is the ISO 639 language code, as registered for the language in UD (either two letters
from ISO 639-1, or three letters from ISO 639-3, lowercased!) The validation script will take
this attribute into account when validating language-specific annotation guidelines (hence it
is one of the very few MISC attributes that are considered during
[validation](https://universaldependencies.org/release_checklist.html#validation).

<b>example?</b>

### SpaceAfter

`SpaceAfter=No` signals that in the underlying untokenized text, there is no space between
the current and the next token. Unlike most MISC attributes, this one is even checked by
the official UD validator. Its presence must correspond to the spaces in the sentence-level
`text` attribute. For multi-word tokens this attribute is placed in MISC of the MWT line
and not at the last word of the token. `SpaceAfter=No` may occur also at the end of
sentence, but not at the end of paragraph or document (if paragraph or document boundaries
are annotated in the file).

SpacesAfter (UDPipe - find that issue where Milan announced them)

* `Translit` … transliteration or transcription of the word form to another writing system. Typically this attribute is used in languages that do not write using the Latin script, and the attribute provides some standard romanization.
* `LTranslit` … analogy of `Translit` for lemmas.
* `Gloss` … approximate translation of the word form or the lemma to another language (typically English). If the translation consists of multiple words, they are connected using a hyphen.
* `MSeg` … morphemic segmentation as commonly used in interlinear glossed text in linguistic literature: a hyphen (“-”) denotes boundary between morphemes, “=” is placed between a clitic and its host word.
* `MGloss` … glossing of individual morphemes as commonly used in interlinear glossed text in linguistic literature. Hypens and equals-to symbols delimit morphemes as in `MSeg`, and there should be the same number of morphemes as in `MSeg` (if `MSeg` is missing, a single morpheme is assumed). A gloss is either a lexical meaning in English, or a grammatical tag; if multiple words/tags are needed in the gloss of one morpheme, they are joined by a period (“.”). There are no guidelines for the tags ([Leipzig glossing rules](https://www.eva.mpg.de/lingua/resources/glossing-rules.php) are a source of tags that are commonly used). However, most of the tags should probably have a corresponding feature in the FEATS column, and there it must follow the UD guidelines.

ohter lemma-level things from Czech

REF for Bible

MWEPOS, ExtPos

entity, coreference
