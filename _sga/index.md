---
layout: base
title:  'Old Irish UD'
udver: '2'
---

# UD for Old Irish <span class="flagspan"><img class="flag" src="../../flags/svg/IE-FOUR.svg" /></span>

## Treebank Classification and Pre-tokenization Considerations

Both spelling and word-separation in Old Irish texts can be highly irregular. In modern editions some editors attempt to faithfully reproduce the text as it survives in the original manuscript, other editors alter the text by standardising spelling and word spacing, by capitalising proper nouns, and by introducing forms of punctuation not present in the original manuscript. A tokenization standard based solely on the conventions generally adhered to in such altered editions would be inappropriate, and in some cases impossible to apply to editions which aim to preserve manuscript orthography most closely, as these editorial changes can drastically affect word boundaries, and hence, the forms which tokens may take.

To mark this distinction all Old Irish treebanks should identify in their README documentation which type of edition they represent by using either the "diplomatic" or "critical" designation. This information should also be included in the treebank name and URL using the abbreviations _Dip_ and _Crit_ (for example, the _Diplomatic St. Gall Glosses_ treebank URL ends: .../UD_Old_Irish-DipSGG).

For the purpose of choosing the correct designation for a new treebank, the following definitions should be adhered to.

Diplomatic:

* A treebank is considered diplomatic only if the spelling of words matches that found in the original manuscript exactly (or as closely as is reasonably possible, for example, where text is missing as a result of binding or damage to the manuscript).

* Where contractions are marked in a manuscript either the mark can be represented by the use of an appropriate punctuation character, or the contraction can be expanded using letter-characters only. Where contractions are expanded, no punctuation character(s) should be used to represent the contraction mark.

* Whitespace characters can be used in one of two ways. They can be introduced and removed as necessary in order to employ word-spacing which matches the prescribed tokenization standard for Old Irish. Alternatively, they should match the spacing of the original manuscript as closely as possible.

* Where punctuation characters have been used to represent marks in the manuscript with a similar appearance, these can be omitted if they do not clearly serve as punctuation marks in the text.

* Aside from the exceptions above, no characters should be introduced or removed from diplomatic treebanks.

Critical:

* A treebank should be identified as a critical edition if any characters other than whitespace characters have been introduced which are neither present in the original manuscript nor implied in the original manuscript by the presence of a contraction marker.

* Aside from punctuation and whitespace characters, if any characters are removed which are present in the original manuscript, a treebank should be identified as a critical edition.

* If any punctuation characters which clearly serve a punctuation function in the original manuscript are removed or replace in a treebank, it should also be identified as a critical edition. The treebank is also critical if any punctuation characters, except for those used to mark contractions, are introduced (including hyphens or middle-dots within the verbal complex).

* If spacing between words has been changed from that of the original manuscript but is not in line with the tokenization standard prescribed for Old Irish, the treebank should be identified as a critical edition.

* It follows from the points outlined above that any change to spelling, or the introduction or removal of any letter character(s) which do not appear in the manuscript source, means that a treebank cannot be identified as diplomatic, and must be marked as critical.

* If text which was written in ogham in the original manuscript is transliterated to the Roman alphabet, the treebank should be identified as critical.

## Tokenization and Word Segmentation

Words are not necessarily delimited by whitespace characters or punctuation in Old Irish texts. Manuscript sources tend to combine unstressed syntactic words (including common clitics like the copula and definite article) with surrounding parts-of-speech bearing a stress. This practice results in a large proportion of words appearing between space characters being purely orthographic. Some treebanks may employ whitespace characters between all syntactic words in accordance with the prescribed Old Irish tokenization guidelines. Where this is done, the README documentation for the treebank should state so clearly. See, for example, the _Diplomatic St. Gall Glosses_ treebank, which employs spacing in this way.

In Roman script the whitespace character can sometimes be used to delineate word boundaries (as described above), however, ogham script has a discrete space mark consisting of a stemline devoid of any other markings.

Punctuation is infrequent in manuscript sources, however, punctuation characters not present in the original manuscript material may be introduced by editors of some modern editions. Aside from these, the following exceptions occur:

* A variety of symbols, puncta, and marks representing abbreviations and contractions appear in manuscripts. If these are represented in a treebank by visually similar punctuation characters, these should not be considered a form of punctuation. Instead these makes up part of a word token (eg "_ca-_" for contracted _cach_, and "_.i._" for Latin _id est_.

* Middle dots and hyphenation are introduced by some editors within the verbal complex. Where these separate a conjunct particle (and possible infixed pronoun) from the remainder of the verbal complex, they are treated as punctuation (for example, _ni·timmorcar_ should be tokenised "_ni_", "·", "_timmorcar_"), however, where they separate an initial preverb (and possible infixed pronoun) from the remainder of the verbal complex, they are treated as part of the verb's token (for example, _do·beir_ is retained as one token "_do·beir_").

* Hyphenation introduced to show nasalisation at the beginning of a word should be treated as part of a single token with the word, as with "_n-uile_".

* In ogham script the opening and closing feather mark characters (_᚛_ and _᚜_) should be treated as punctuation.

No multiword tokens occur. Where adjectives or nouns precede other nouns they generally remain separate tokens as with "_sen-_" in the term "_sen-grec_". The following exceptions occur:

* Where a word prefixed to a noun changes the stem-class of that noun the combination is taken to be a single token, hence, the combination of "_so_" and "_scél_" renders a single token, "_soscéla_".

* Prefixes like "_mí-_" or "_neph-_", which are only used in combination with another word, form a single token with the following word as with "_mí-fogur_" or "_neph-adnachte_".

Some general advice on tokenization follows which may not be intuitive to those familiar with Old Irish:

* The verbal complex should be divided into conjunct particles (where they occur) and the verb. Aside from conjunct particles (including the negative particle, interrogative particle and empty preverb, _no_) all other preverbs, including the augment, should form one token with the verbal root (eg. _caraid_, _asbeir_, _dogní_).

* Infixed pronouns, where they occur, never form tokens on their own. They either form a single token with a conjunct particle (as with _nom_ for _no_ + _-m_, and _nít_ for _ní_ + _-t_), or are compounded within the token of a compound verb where they follow the initial preverb in deuterotonic forms (as with _fotgaib_ for _fogaib_ + _-t-_).

* Conjunct forms of the copula always form a single token with the POS immediately preceding them (including negative particles and conjunctions, eg. _cid_ and for _cía_ + _-d_).

* There are no discrete negative conjunctions. All such forms should be divided into the conjunction, and following negative conjunction (eg. _connách_ becomes _co_ and _nnách_).

* Tokens may contain whitespace characters in some instances, for example, where letters which mark nasalisation are separated from the rest of the following word in manuscript sources. Thus, in the gloss "_.i. céin bas m béo infer_", "_m béo_" should be treated as a single token.

* Empty tokens are not possible. Where a word is reduced to 0 in some positions (eg. 3rd sg. forms of the copula or of infixed pronouns following negative particles) no replacement mark or token should be used in its place. Hence, in _ní n-aithgéuin_, "he does not recognise him", where the object pronoun is only apparent because of nasalisation on the following vowel, only the two tokens "_ní_" and "_n-aithgéuin_" are rendered.

## Morphology

### Tags

* Currently only 16 universal tags are used for Old Irish.
  * No treebank currently uses the symbol [SYM]() category, however, it would be appropriate in treebanks where punctuation characters are used to represent manuscript symbols (aside from punctuation, contractions, etc. referenced above).

* The only words tagged [AUX]() are absolute and negative forms of the copula. Conjunct forms of the copula take the POS tag of the token to which they are suffixed, generally [SCONJ](). All other verbs, (including the substantive verb, _attá_, "to be") are tagged [VERB]().

* Old Irish particles [PART]() include:
  * demonstrative particles
  * deictic particles
  * relative particles, and demonstrative relative particles
  * vocative particles
  * negative particles
  * interrogative particles
  * the empty verbal particle, _no_.

* The [DET]() tag is used only for the definite article where it is not suffixed to a preposition in the accusative or dative case. Where it is suffixed to a preposition the combination is tagged as an adposition [ADP]().

* The [PRON]() tag is used for independent personal pronouns, possessive pronouns, emphatic pronouns, and the anaphoric pronoun, _suide_. Infixed and suffixed pronouns take the POS tag of the verb [VERB]() or conjunct particle [PART]() to which they are affixed.

* Verbal nouns are tagged as [NOUN]().

---

### Features

* Nouns inflect for [Number]() (singular, dual, or plural) and [Case]() (nominative, vocative, accusative, genitive or dative). Inherent features such as Gender and Stem-class are not encoded.

* Adjectives agree with Nouns with respect to the features [Case](), [Gender]() (masculine, feminine, or neuter), and [Number](), all of which are encoded for adjectives as none are inherent.

* Verbs inflect for [Mood]() (conditional, imperative, indicative, or subjunctive), [Number]() (singular or plural), [Person]() (1, 2, or 3), [Tense]() (past, present, or future), and [Voice]() (active or passive) at a minimum.
  * Where the [Tense]() is marked as past for a verb, it may also inflect for [Aspect]() (imperfect or perfect).
  * Where a relative particle precedes a verb, or a relative clause is present within the verbal complex, a verb will also inflect for [PronType]() (relative).
  * Where the substantive verb shows repeated action in the present tense it inflects for [Aspect]() (habitual).
  * Where a verb contains an infixed pronoun it will inflect for [PronClass]() (A, B, or C), [PronNum]() (singular or plural), [PronPers]() (1, 2, or 3), and [PronType]() (Personal) at a minimum.
  * Where a 3rd singular pronoun is infixed the verb will inflect also for [PronGend]() (masculine, feminine, or neuter).
  * Where a verb containing a relative clause also contains an infixed pronoun both the values both values (personal and relative) should be listed as inflections under [PronType]().
  * Where an empty _d_ or _id_ occurs in place of an infixed pronoun following the conjunctions _cía_ and _má_, the [PronType]() is indicated as being void to show that it does not function as a personal pronoun.

* Where conjunct particles precede a verb they will have inherent features, depending on their function:
  * Relative particles will have [PronType]() (relative).
  * Negative particles will have [Polarity]() (negative).
  * Interrogative particles will have [PronType]() (interrogative).
  * The empty verbal particle, _no_, will have [PartType]() = (verbal).
  * Conjunct particles containing an infixed pronoun will also inflect for [PronClass]() (A, B, or C), [PronNum]() (singular or plural), [PronPers]() (1, 2, or 3), and [PronType]() (Personal) at a minimum, and for [PronGend]() (masculine, feminine, or neuter) where a 3rd singular pronoun is infixed.

* The copula has an inherent [VerbType]() (copula), and inflects for [Mood]() (conditional, imperative, indicative, or subjunctive), [Number]() (singular or plural), [Person]() (1, 2, or 3), [Polarity]() (positive or negative), and [Tense]() (past, present, or future) at a minimum.
  * Relative forms of the copula have inherent [PronType]() (relative).
  * Where conjunct forms of the copula are combined with preceding parts-of-speech, these features are all carried over from the copula to the preceding word to which it is suffixed.

## Syntax

* The normal order of an Old Irish sentence is verb-subject-object. There are some notable exceptions to this:
  * A copula construction is frequently used place emphasis on a particular word within a sentence. In this construction the emphasised word is moved to beginning of the sentence, following the copula as a predicate, and followed by a relative clause. An emphasised word which would otherwise be the subject or object of the verb will occur before the verb in a sentence of this type. It is possible for the copula to be omitted from this construction, in which case the emphasised word is fronted to the beginning of the sentence.
  * Bergin's Law describes a form of archaism found in some Early Irish texts whereby a verb does not stand at the head of its clause, takes a dependent form, and can follow its subject or object.
  * Where pronominal verbal objects are infixed within the verb, the subject of the verb will follow both.
  * Where the object of a verb is represented by an infixed pronoun following a conjunct particle, it will precede the verb.

* In copular sentences the normal word order is copula-predicate-subject. As the copula inflects for Person and Number, however, the subject does not always follow the predicate where it is contained in the copula form.

* As the largest amount of text surviving from the Old Irish period comes in the form of glosses of Latin text, sometimes amounting only to single-word translations, there will not always be a verb or copula form present to form the head of a sentence.

## References

Bergin, Osborn. "On the Syntax of the Verb in Old Irish." Ériu, vol. 12, 1938, pp. 197–214.

Doyle, Adrian, John Philip McCray and Clodagh Downey. "A Character-Level LSTM Network Model for Tokenizing the Old Irish text of the Würzburg Glosses on the Pauline Epistles." CLTW 2019, Dublin, Ireland, August 2019. (https://www.aclweb.org/anthology/W19-6910/)

McCone, Kim. (1997). The Early Irish Verb - Second Edition Revised with Index. An Sagart, Maynooth.

Ó hUiginn, Ruairí. "Notes on Old Irish Syntax." Ériu, vol. 38, 1987, pp. 177–183.

Stifter, David. (2006). Sengoidelc. Syracuse University Press, New York.

Thurneysen, Rudolf. (1946). A Grammar of Old Irish. Binchy, D. A. and Bergin, Osborn (tr.), Reprinted 2010, Dublin Institute for Advanced Studies.

## Treebanks

There are [two](../treebanks/sga-comparison.html) Old Irish UD treebanks:

  * [Old Irish-DipSGG](../treebanks/sga_dipsgg/index.html)
  * [Old Irish-DipWBG](../treebanks/sga_dipwbg/index.html)
