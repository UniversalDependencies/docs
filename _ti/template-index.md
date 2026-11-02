---
layout: base
title:  'Tigrinya UD'
udver: '2'
---

# UD for Tigrinya <span class="flagspan"><img class="flag" src="../../flags/svg/ER.svg" /></span>

Tigrinya (ትግርኛ) is an Ethio-Semitic language spoken in Eritrea and northern Ethiopia, written in the Ge'ez script (called Ethiopic in Unicode). In the examples below, Tigrinya words are followed by a transliteration in italics and an English translation.

## Tokenization and Word Segmentation

* Words are delimited by whitespace. Punctuation marks (፡ ። ፣ ፤ ፧ !), which are often attached to a neighbouring word, are separate tokens. Questions end with the Ge'ez question mark ፧. Abbreviations written with a slash, such as ወ/ሮ / *w/ro* for ወይዘሮ / *wəyzəro* "Mrs.", are single tokens.
* There are no words with spaces.
* Multiword tokens are frequent. The following elements are written together with their host but are segmented as separate syntactic words:
  * prepositions written as prefixes (ን- *n-*, ብ- *b-*, and ናይ / *nay* in ናይቲ / *nayti*), e.g. ነቲ / *nəti* = ን + እቲ "OBJ the";
  * possessive suffixes on nouns, adjectives and verbal nouns, e.g. ኣቦይ / *ʔaboy* = ኣቦ + -ይ "my father";
  * subordinating prefixes of verbs (ዝ- *z-*, ክ- *k-*, እንተ- *ʔntə-*, ከም *kəm*, ስለ *slə*, እንክ- *ʔnk-*);
  * the negation affixes ኣይ-…-ን *ʔay-…-n* and ዘይ- *zəy-*;
  * the coordinating suffix -ን *-n*, and enclitics such as -ስ *-s* "as for" and 'ውን *'wn* "also".
* Other verb morphology (subject and object agreement, aspect, mood and voice) is not segmented.
* Exceptions: the negative copula ኣይኮነን / *ʔaykonən* "is not" is one token; in the negative existential (የለን / *yələn* "there is not") only the suffix -ን is segmented, since the prefix is fused with the stem; case-marked personal pronouns (ንዓኣ / *nʕaʔa* "her", ከምኡ / *kəmʔu* "like him", ናብኡ / *nabʔu* "to him") and possessive pronouns (ናታ / *nata* "hers") are not segmented; lexicalised adverbs such as ብጣዕሚ / *bt'aʕmi* "very" are not segmented.

## Morphology

### Tags

* All UPOS tags are used except `SYM` and `X`.
* `PART` is used for discourse and question particles (እንዶ / *ʔndo*, ዶ / *do*, -ስ / *-s*) and for the particles of light verb compounds (ጽን / *s'n*, ደስ / *dəs*, ድንን / *dnn*, …).
* The negation affixes ኣይ-, -ን and ዘይ- are tagged `ADV` with `Polarity=Neg`.
* `AUX` is used for the copula እዩ / *ʔyu* (including the negative ኣይኮነን), for ነበረ / *nəbərə* as past copula and past auxiliary, for ኣለ / *ʔalə* when it follows another verb and agrees with its subject (progressive, perfect), and for forms of ኮነ / *konə* when they follow a verb in subordinate clauses. Elsewhere, ኣለ is `VERB` (existence, possession, obligation), and ኮነ is `VERB` in the sense "become".
* Determiners (the article እቲ / *ʔti* and demonstratives such as እዚ / *ʔzi*) are `DET` before a noun, adjective or relative clause, and `PRON` when used alone. Possessive suffixes are `DET`; separate possessive words are `DET` before a noun and `PRON` when used alone.
* Verbal nouns (ምኻድ / *mxad* "going") are `NOUN` with `VerbForm=Vnoun`. Converbs are `VERB` with `VerbForm=Conv`. Ordinal numerals are `ADJ` with `NumType=Ord`.

### Features

* Nouns: `Gender`, `Number`; `VerbForm=Vnoun` on verbal nouns; `Abbr=Yes` on abbreviations.
* Verbs: `Gender`, `Number`, `Person` (subject agreement); `Gender[obj]`, `Number[obj]`, `Person[obj]` (object and applicative suffixes); `Aspect=Imp,Perf`; `Mood=Imp,Jus`; `VerbForm=Conv`; `Voice=Pass,Cau` (`Voice=Pass` marks the ተ- stem, whether the clause is passive, reflexive or middle); `Polarity=Neg` on forms with a fused negative prefix.
* Copula and auxiliaries: `Tense=Pres` (non-past) on እዩ and ኣለ, `Tense=Past` on ነበረ; `Polarity=Neg` on ኣይኮነን.
* Pronouns and determiners: `PronType=Art,Dem,Prs,Int`; `Poss=Yes`; `Reflex=Yes`; `Person`, `Gender`, `Number`; `Case=Acc,Equ,All` on case-marked personal pronouns.
* Adjectives: `Gender`, `Number`; `NumType=Ord` on ordinals.
* Passive and causative verbs are lemmatised by their derived stem (ተፈሊጡ / *təfəlit'u* → ተፈልጠ "be known").

## Syntax

* Subjects (`nsubj`) agree with the subject marking of the verb and are not case-marked. In the obligation construction with ኣለ, the obliged person is the subject (nominative) but is indexed by an object suffix on ኣለ.
* Objects (`obj`) are cross-referenced by an object suffix on the verb and take the objective prefix ን- when definite. `iobj` is used for arguments marked with ን- and cross-referenced by an object or applicative suffix (recipients, causees, benefactives, malefactives, instruments). Arguments with other prepositions are `obl`.
* Experiencers of experience verbs and possessors of ኣለ, cross-referenced by the object suffix, are `obj:exp` and `obj:poss`.
* Copula: the present copula is እዩ (negative ኣይኮነን), the past copula is ነበረ; the copula is attached to the nonverbal predicate as `cop`. When both the subject and the predicate are nominals or headless relative clauses, the constituent preceding the copula is the predicate. The existential verb ኣለ is not a copula. In clefts, the clefted element is the predicate and the relative clause is `csubj:cleft`.
* Converbs and subordinate verbs form adverbial clauses (`advcl`); relative clauses with ዝ- are `acl`; headless relative clauses are annotated according to their function (`csubj`, `ccomp`).
* Universal subtypes used: `nsubj:pass`, `csubj:pass`, `nsubj:outer`, `csubj:outer`, `det:poss`, `compound:lvc`, `compound:redup`.
* Language-specific subtypes: [ti-dep/xcomp-pred](), [ti-dep/csubj-cleft](), [ti-dep/obj-exp](), [ti-dep/obj-poss](), [ti-dep/advmod-aff](), [ti-dep/case-pre]().

## Treebanks

There is 1 Tigrinya UD treebank:

* [Tigrinya-TiTB](../treebanks/ti_titb/index.html)
