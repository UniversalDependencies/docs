---
layout: base
title: Kullvi UD
udver: 2
---

# UD for Kullvi

Kullvi UD Treebank (KDTB) \| Linguistic annotation overview

Kullvi is an Indo-Aryan language spoken primarily in the Kullu region of
Himachal Pradesh, India. The Kullvi UD Treebank (KDTB) provides
token-level part-of-speech and dependency annotations following the
Universal Dependencies (UD) framework. Its language-specific XPOS tags
follow the Bureau of Indian Standards (BIS) POS tagset.

Dataset inspected: kfx_kdtb-ud-test.conllu (test split); 429
sentences and 4,601 integer-ID syntactic tokens. The observations below
describe this supplied file, not necessarily every split of the complete
treebank.

# Tokenization and Word Segmentation

- Words are segmented into individual CoNLL-U token rows; word
  boundaries in the sentence text are generally whitespace-delimited.

- Punctuation is annotated as a separate token when present; e.g., “तुसरा
  घोर कोखे सा ?” has “?” tagged PUNCT with relation punct.

- Grammatical and discourse elements are separately represented when
  annotated: “बे” is tagged PART/discourse in “हाऊँ चोली घोरा बे”.

- Postpositions are represented as ADP and commonly attached with the
  case dependency relation.

# Morphology

## Tags

The supplied treebank uses two POS layers: UPOS (Universal POS tags) and
XPOS (BIS-based language-specific tags).

| UPOS  | Tokens | Representative XPOS |
|-------|--------|---------------------|
| NOUN  | 954    | NN                  |
| VERB  | 712    | VM                  |
| PRON  | 495    | PRP, WQ             |
| ADP   | 484    | PSP                 |
| AUX   | 406    | VAUX                |
| ADV   | 391    | RB                  |
| PUNCT | 338    | SYM                 |
| ADJ   | 291    | JJ                  |
| PART  | 237    | NEG, RP             |
| NUM   | 90     | QC                  |
| CCONJ | 79     | CC                  |
| PROPN | 77     | NNP                 |
| SCONJ | 39     | CC                  |
| DET   | 8      | DT                  |

Examples from annotated sentences: “तुसरा” → PRON / PRP; “घोर” → NOUN /
NN; “कोखे” → ADV / RB; “सा” → VERB / VM (sentence 1); “रा” → AUX / VAUX
(sentence 5). The category of a surface form is determined by the
individual annotation and context.

## Auxiliary Verbs (AUX)

- The dataset distinguishes verbal heads (VERB) from auxiliaries (AUX).
  In “ओज़ बड़ा भारी गाश लागी रा”, “लागी” is VERB/root and “रा” is AUX/aux.

- “सी” is annotated AUX/aux in “आसे रोहा सी हिमाचल प्रदेश रे कुल्लू ज़िला न”.

- Copular constructions also occur: “सा” is AUX/cop in “हिमाचल री
  राजधानी शिमला सा , जो घूमने री बाँकी जगह सा।”

## Modal Auxiliaries and Phase Verbs

The test file contains AUX annotations, but its FEATS fields do not
specify a complete modal/phase-verb inventory. A complete language-wide
modal or phase verb list should therefore be established by manual
linguistic review rather than copied from Mandyali.

## Compound and Light-Verb Constructions

The relation compound appears in the file, including “चोली”
(VERB/compound) in “हाऊँ चोली घोरा बे”. However, compound also labels
proper-name sequences (e.g., “हिमाचल प्रदेश”), so not every compound arc
denotes a light verb. The distinction between lexical verbs, light verbs
and auxiliaries needs construction-by-construction review.

## Features

The morphological FEATS column (column 6 of CoNLL-U) is “\_” for all
4,601 syntactic tokens in the supplied test file. Therefore, Gender,
Number, Person, Case, Tense, Aspect, Mood and other UD morphological
features cannot be reported as annotated features of this dataset on the
available evidence. These may be added in a later annotation pass.

# Syntax

The test annotations use standard UD relations to encode clausal heads,
nominal arguments, modifiers, complements, coordination and discourse
structure. Kullvi is typically described as having an SOV tendency, but
no corpus-wide word-order analysis was performed for this document.

- Core arguments: nsubj marks nominal subjects (e.g., “पाहुने” in “मेरे पाहुने
  लोड़ी आए”); obj marks direct objects (e.g., “गोशटे” in “होरी बे ज्ञान आपू बे
  गोशटे ।”).

- Adpositional phrases: case marks adpositions and obl marks many
  oblique dependents.

- Clausal embedding: “कि” is SCONJ/mark and “चले” is VERB/ccomp in “हाऊँ
  बिल्कुल भी नहीं चाहदीं थी कि तेईबे मेरे गूँगे होने रा पता चले।”

- Nonverbal predicates: cop is present, as in “हिमाचल री राजधानी शिमला
  सा , जो घूमने री बाँकी जगह सा।”

- Discourse: particles such as “बे” may receive PART/discourse.

Dependency relations observed in the supplied split (28 types): acl,
advcl, advmod, amod, appos, aux, case, cc, ccomp, compound, conj, cop,
csubj, dep, det, discourse, iobj, mark, nmod, nsubj, nummod, obj, obl,
parataxis, punct, root, vocative, xcomp.

# Treebanks

There is only one Kullvi UD treebank:

- Kullvi-KDTB

