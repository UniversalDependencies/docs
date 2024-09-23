---
layout: base
title:  'Classical Armenian Format Extension'
---

# Format Extension: Miscellaneous

The final MISC field is for storing any additional information that does not fit into any of
the other fields. See also the description of the [CoNLL-U file format](../../format.html).

## Untokenized text

In accordance with the universal formatting guidelines the Classical Armenian data uses the `SpaceAfter=No`
MISC feature to facilitate reconstruction of original (pre-tokenization) text.

## Transliteration

In the original PROIEL annotation of the Classical Armenian Gospels (following the underlying Künzle 1984 edition of the text), the lemmas and wordforms are given in transliteration. The CAVaL treebank uses the original Armenian spelling in the FORM and LEMMA fields, whereas an adjusted transliteration is given in the MISC features `Translit=` (for forms) and `LTranslit=` (for lemmas). The transliteration equivalents (based on on the transliteration system accepted in the _Revue des Études Arméniennes_) and their conventional phonetic values based on the traditional pronounciation of Classical Armenian are given in the table below.


| Form | Transliteration | IPA |
|:----|:----|:----|
| Ա ա | A a | [ɑ] |
| Բ բ | B b | [b] |
| Գ գ | G g | [g] |
| Դ դ | D d | [d] |
| Ե ե | E e	| [ɛ] |
| Զ զ | Z z	| [z] |
| Է է | Ē ē	| [e] |
| Ը ը | Ə ǝ	| [ə] |
| Թ թ | Tʻ tʻ | [tʰ] |
| Ժ ժ | Ž ž | [ʒ] |
| Ի ի | I i | [i] |
| Լ լ | L l | [l] |
| Խ խ | X x | [χ] |
| Ծ ծ | C c | [ts] |
| Կ կ | K k | [k] |
| Հ հ | H h | [h] |
| Ձ ձ | J j | [dz] |
| Ղ ղ | Ł ł | [ɫ] |
| Ճ ճ | Č č | [tʃ] |
| Մ մ | M m | [m] |
| Յ յ | Y y | [j] |
| Ն ն | N n | [n] |
| Շ շ | Š š | [ʃ] |
| Ո ո | O o | [o] |
| Չ չ | Čʻ čʻ | [tʃʰ] |
| Պ պ | P p | [p] |
| Ջ ջ | J̌ ǰ | [dʒ] |
| Ռ ռ | Ṙ ṙ | [r] |
| Ս ս | S s | [s] |
| Վ վ | V v | [v] |
| Տ տ | T t | [t] |
| Ր ր | R r | [ɾ] |
| Ց ց | Cʻ cʻ | [tsʰ] |
| Ւ ւ | W w | [w] |
| Փ փ | Pʻ pʻ | [pʰ] |
| Ք ք | Kʻ kʻ | [kʰ] |
| . | : |  |
| : | . |  |
| ՝ | ; |  |
| ՞ | ? |  |


## Lemma extensions

The following MISC features give additional information on the lemmas.

* `LId` is a unique identifier of the dictionary entry, used with homonyms. It only applies to words with coinciding values of the LEMMA and UPOS fields. The value of the `LId` field contains the lemma followed by a hyphen and a numeric identifier. Example: *մի-1*.
* `Gloss` feature contains an English translation of the lemma. The English glosses are adapted from those used in the electronic concordance of the Armenian Bible issued as part of the Arak29 Project (https://arak29.org/bible/book/index_w_az.htm, https://bible.armeniancathedral.org/).
