---
layout: base
title:  'Old Irish UD'
udver: '2'
---

# UD for Old Irish <span class="flagspan"><img class="flag" src="../../flags/svg/IE-FOUR.svg" /></span>

## Treebank Classification and Pre-tokenization Considerations

Both spelling and word-separation in Old Irish texts can be highly irregular. In modern editions some editors attempt to faithfully reproduce the text as it survives in the original manuscript. These are generally referred to as diplomatic editions. Other editors may alter the text so that it does not resemble exactly the contents of a single manuscript source. This may be done with the aim of emulating a theorised earlier exemplar from which one or more existing manuscript sources are believed to have been copied. In such cases the resulting work is generally referred to as a critical edition. Editors may also alter texts by standardising spelling, by silently introducing word spacing, by capitalising certain letter characters in accordance with modern orthographic practice, and by introducing forms of punctuation not present in the original manuscript. While these changes are not necessarily associated with critical editions, they alter the text in such a manner that it cannot be referred to as entirely diplomatic. Texts edited in such a manner will therefore be referred to broadly as "critical editions" here also.

It is necessary to mark a distinction between diplomatic editions and editions which may have been edited to any extent (here "critical editions"). To mark this distinction all Old Irish treebanks should identify in their README documentation which type of edition they represent by using either the "diplomatic" or "critical" designation. This information should also be included in the treebank name and URL using the abbreviations _Dip_ and _Crit_ (for example, the _Diplomatic St. Gall Glosses_ treebank URL ends: .../UD_Old_Irish-DipSGG).

For the purpose of choosing the correct designation for a new treebank, the following definitions should be adhered to.

Diplomatic:

* A treebank is considered diplomatic only if the spelling of words matches that found in the original manuscript exactly (or as closely as is reasonably possible, for example, where text is missing as a result of binding or damage to the manuscript).

* Word separation using space characters should be based as closely as possible on that of the original manuscript.

* Non-letter characters can be used to approximate marks in the manuscript with a similar appearance, however, these can also be omitted if they do not clearly serve as punctuation marks in the text.

* No punctuation should be introduced which does not resemble punctuation marks present in the original manuscript source. For example, the interpunct should not be used within the verbal complex, nor should hyphenation be used either there, or to separate nasals.

* Where contractions are marked in a manuscript there are two options. Either the mark can be represented by the use of an appropriate punctuation character, or the contraction can be expanded using letter-characters only. Where contractions are expanded using letter characters, no punctuation character(s) should be used to represent the contraction mark. If contractions are expanded, it would be preferable to include the annotated text of the gloss alongside the unannotated text. Annotations should identify spans of text which has been expanded or supplied.

* Aside from the exceptions above, no characters should be introduced or removed from diplomatic treebanks.

Critical:

* A treebank should be identified as a critical edition if any characters have been introduced which are neither present in the original manuscript nor implied in the original manuscript by abbreviated or contracted forms.

* Aside from non-letter characters serving no punctuation function, if any characters are removed which are present in the original manuscript, a treebank should be identified as a critical edition.

* If any punctuation characters which clearly serve a punctuation function in the original manuscript are omitted or replaced in a treebank, it should also be identified as a critical edition. The treebank is also critical if any punctuation characters, except for those used to mark contractions, are introduced (including hyphens or the interpunct within the verbal complex).

* If spacing between words has been changed from that of the original manuscript the treebank should be identified as a critical edition.

* Any change to spelling, or the introduction or removal of any letter character(s) which do not appear in the manuscript source, means that a treebank cannot be identified as diplomatic, and must be marked as critical.

* If any text is transliterated from one alphabet to another, the treebank should be identified as critical. For example, if text appears in Ogham in the original manuscript but in Roman script in a treebank, the treebank should be marked as critical.

## Tokenization and Word Segmentation

Words are not necessarily delimited by whitespace characters or punctuation in Old Irish texts. Manuscript sources tend to combine unstressed syntactic words (including common clitics like the copula and definite article) with surrounding parts-of-speech bearing a stress. This practice results in many compound words which are purely orthographic, but comprised of two or more lexical words.

In Roman script the whitespace character can sometimes be used to delineate word boundaries (as described above), however, Ogham script has a discrete space mark consisting of a stemline devoid of any other markings.

Compounds should all be separated during tokenisation:

* This includes the initial preverb, conjunct particles, and infixed pronouns within the verbal complex, for example _dabeir_ should be tokenised "_d_", "a", "_beir_".

* This also includes combinations with the copula, _cid_ should be tokenised "_ci_", and "_d_", and _máso_ should be tokenised "_má_" and "_so_".

* Combinations of definite articles combining with prepositions should also be separated, as with _isin_ being tokenised "_i_" and "_sin_".

Prepositional pronouns (conjugated prepositions) should not be separated during tokenisation, as these are deemed to be discrete words in their own right.

Punctuation is infrequent in manuscript sources, however, punctuation characters not present in the original manuscript material may be introduced by editors of some modern editions. Aside from these, the following exceptions occur:

* A variety of symbols, puncta, and marks representing abbreviations and contractions appear in manuscripts. If these are represented in a treebank by visually similar punctuation characters, these should not be considered a form of punctuation. Instead these makes up part of a word token (eg "_ca-_" for contracted _cach_, and "_.i._" for Latin _id est_.

* Middle dots and hyphenation are introduced by some editors within the verbal complex. Where these separate preverbs, conjunct particles, and sometimes infixed pronouns from the remainder of the verbal complex, they are treated as punctuation (for example, _ni·timmorcar_ should be tokenised "_ni_", "·", "_timmorcar_", and _do·beir_ should be tokenised "_do_", "·", "_beir_").

* Hyphenation introduced to show nasalisation at the beginning of a word should be treated as part of a single token with the word, as with "_n-uile_".

* In Ogham script the opening and closing feather mark characters (_᚛_ and _᚜_) should be treated as punctuation.

No multiword tokens occur. Where adjectives or nouns precede other nouns they generally remain separate tokens as with "_sen-_" in the term "_sen-grec_".

Some general advice on tokenization follows which may not be intuitive to those familiar with Old Irish:

* There are no discrete negative conjunctions. All such forms should be divided into the conjunction, and following negative conjunction (eg. _connách_ becomes _co_ and _nnách_).

* Tokens may contain whitespace characters in some instances, for example, where letters which mark nasalisation are separated from the rest of the following word in manuscript sources. Thus, in the gloss "_.i. céin bas m béo infer_", "_m béo_" should be treated as a single token.

* Empty tokens are not possible. Where a word is reduced orthographically to 0 in some positions (eg. 3rd sg. forms of the copula or of infixed pronouns following negative particles) no replacement mark or token should be used in its place. Hence, in _ní n-aithgéuin_, "he does not recognise him", where the object pronoun is only apparent because of nasalisation on the following vowel, only the two tokens "_ní_" and "_n-aithgéuin_" are rendered.

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
  * Where a nasalising or leniting relative clause is present within the verbal complex, a verb will have the feature [PronType]() (relative), but where a relative particle precedes a verb the particle will be annotated [PronType]() (relative).
  * Where the substantive verb shows repeated action in the present tense it inflects for [Aspect]() (habitual).
  * Where an infixed pronoun is present it will be annotated for [PronClass]() (A, B, or C), and [PronType]() (Personal).
  * Where an empty _d_ or _id_ occurs in place of an infixed pronoun following the conjunctions _cía_ and _má_, the [PronType]() is indicated as being void to show that it does not function as a personal pronoun.

* Where various particles precede a verb they will have inherent features, depending on their function:
  * Relative particles will have [PronType]() (relative).
  * Negative particles will have [Polarity]() (negative).
  * Interrogative particles will have [PronType]() (interrogative).
  * Preverbs and the empty verbal particle, _no_, will have [PartType]() (verbal).

* The copula has an inherent [VerbType]() (copula), and inflects for [Mood]() (conditional, imperative, indicative, or subjunctive), [Number]() (singular or plural), [Person]() (1, 2, or 3), [Polarity]() (positive or negative), and [Tense]() (past, present, or future) at a minimum.
  * Relative forms of the copula have inherent [PronType]() (relative).

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
