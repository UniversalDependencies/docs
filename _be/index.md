---
layout: base
title:  'Belarusian UD'
udver: '2'
---

<!-- The previous version of the language-specific documentation was placed here: https://github.com/UniversalDependencies/UD_Belarusian-HSE/blob/dev/README.md
-->

# UD for Belarusian <span class="flagspan"><img class="flag" src="../../flags/svg/BY.svg" /></span>

## Tokenization and Word Segmentation

The low-level tokenization generally adopts the RNC standard.

* In general, tokens are delimited by whitespace. The regexp `[А-zА-яЁёУўі\-’'‘]+` usually corresponds to one token.  
* An apostrophe ⟨’⟩ (occasionally ⟨'⟩ and ⟨‘⟩ in the source texts) is part of the token when used to separate the non-palatalized consonant and the iotated vowel: ⟨п’я п’е п’і п’ё п’ю⟩ /pja pjɛ pi pjɔ pju/. 
* Punctuation (recognized by the corresponding Unicode property) that is conventionally written adjacent to the preceding or following word is separated during tokenization. 
* Each punctuation mark is treated as a single token, e.g. the following sequence: <i>)", -</i> becomes four tokens, <i>)</i> , <i>"</i>, <i>,</i>, and <i>-"</i>. Exceptions are conventional multi-character punctuation marks such as <i>--</i> , <i>...</i> , <i>?!</i> and emojis and smileys: <i>:)</i> , <i>^_^</i>, etc.
* Conventional non-cyrillic multi-character terms are tokenized as single tokens: <i>°С</i>, <i>км2</i>.

Some special cases worth mentioning:  

* Numerical expressions including decimal numbers, such as <i>245</i>, <i>3,14</i>, are treated as single tokens.
* Time expressions like <i>20:55</i> are splitted into separate tokens (in this case, three { <i>20</i> , <i>:</i> , <i>55</i> }).
* Dates like <i>20.04.2012</i> are splitted into separate tokens (in this case, five { <i>20</i> , <i>.</i> , <i>04</i> , <i>.</i> , <i>2012</i> }).
* Special symbols before and after numerical expressions, as in <i>$500</i> , <i>2,67%</i> , <i>+27°С</i> , are tokenised separately (so, the tokens are { <i>$</i> , <i>500</i> } , { <i>2,67</i> , <i>%</i> } , { <i>+</i> , <i>27</i> , <i>°С</i> }).
* Numerical expressions with hyphen and cyrillic endings (e.g. <i>1-ый</i> “1st”, <i>3-м</i> “3rd.Ins”) as well as adjectives and other non-numerals which contain digits (e.g. <i>79-гадовы</i> “79 year old”, <i>500-годдзе</i> “500th anniversary”) are treated as single tokens.
* Other words with hyphen are treated as single tokens, except for the cases then the first part is inflected. Examples: { <i>з-за</i> } “because of”, { <i>зялёна-шэрых</i> } “green-gray”, { <i>Санкт-Пецярбург</i> } “St. Petersburg”, but { <i>Ростове</i> , <i>-</i> , <i>на</i> , <i>-</i> , <i>Дону</i>} “(in) Rostov on Don”.
* Abbreviations are treated as single tokens, whitespaces split the abbreviations.
* Abbreviations marked by a period, as in <i>стр.</i> “p. (page)”, <i>П.</i> “P. (for Peter)”, are treated as single tokens. If the period overlaps with the end of sentence period then it is written once as a separate token (denoting end-of-sentence), e.g. { <i>1914</i> , <i>г</i> , <i>.</i> } “year 1914”.
* Abbreviations can not contain a period inside, i.e. the patterns like <i>і т.д.</i> “and so on”, <i>да т.п.</i> “and so forth” are splitted into three tokens: { <i>i</i> , <i>т.</i> , <i>д.</i> }, { <i>да</i> , <i>т.</i> , <i>п.</i> }.
* Email addresses, URLs, and tweet-style names are treated as single tokens: {no@mail.ru}, {https://github.com}, {@anna_li}
* * The pronoun ([PRON]()) vs. determiner ([DET]()) distinction is based on word lists because the traditional grammar does not define determiners.

The Belarusian UD treebank does not contain multiword tokens.

---
**Instruction**: Describe the general rules for delimiting words (for example, based on whitespace and punctuation) and exceptions to these rules. Specify whether words with spaces and/or multiword tokens occur. Include links to further language-specific documentation if available.

---

## Morphology

### Tags

* Belarusian uses 16 universal POS categories;
  the current data does not contain any occurrences of the [INTJ]() category.  
* The only auxiliary verb is the copula _быць_ “to be”. The conditional mood marker _б_ “would” etymologically related to _быць_ is also marked [AUX]().  
* The pronoun ([PRON]()) vs. determiner ([DET]()) distinction is based on word lists because the traditional grammar does not define determiners. The [DET]() category includes possessive (including reflexive and relative possessive), demonstrative, interrogative/relative, indefinite, negative, and universal (total) determiners that inflect for gender. The relative pronoun _які_ is tagged either [PRON]()) or ([DET]() depending its syntactic role.  

### Features

* There are five main verbal forms, distinguished by the UPOS tag and the value of the [VerbForm]() feature:
  * Finite verb `Fin`, tagged [VERB]() or [AUX](). Slavic l-participle is part of the finite verb paradigm ([Tense]() feature with the value `Past`).  
  * Infinitive `Inf`, tagged [VERB]() or [AUX]().
  * Participle `Part`, tagged [VERB]() or [AUX]() 
  * Converb  (gerundive) `Conv`, tagged [VERB]() or [AUX]().
* (De)verbal nouns are not considered part of the verb paradigm and tagged [NOUN]().  
* Verb [Aspect]() has two possible values: `Perf` and  `Imp`.
* [Tense]() has three possible values: `Past`, `Pres`, and `Fut`.
* [Voice]() has three possible values: `Act` and `Mid` on the non-participle forms, and `Act` and `Pass` on the participle forms. 
* [Mood]() has three possible values: `Ind`, `Imp`, and `Cnd`;
  the latter is tagged in [AUX]() or [SCONJ](). 
* [Number]() has two possible values: `Sing` and `Plur`. 
* [Gender]() has three possible values: `Masc`, `Fem`, and `Neut`. [Gender]() is a lexical feature for [NOUN](), [PROPN](), and [PRON]() and an inflectional agreement features for [ADJ](), [DET](), a few [NUM](), participle forms ([VERB]() and [AUX]()).
* [Animacy]() have two values: `Anim` and `Inan`. [Animacy]() is a lexical feature for [NOUN](), [PROPN](), and [PRON]() and a grammatical feature for [ADJ](), [DET](), a few [NUM](), participle forms ([VERB]() and [AUX]()). Only accusative forms (except for feminine singular) distinguish [Animacy]() grammatically.  
* [Case]() has six possible values: `Nom`, `Gen`, `Dat`, `Acc`, `Ins`, `Loc`.  
* [Person]() has three possible values: `1`, `2`, `3` and applies to the non-past finite verb forms ([VERB]() and [AUX]()) as an inflectional feature and to pronouns ([PRON]()) as a lexical feature.
* [Degree]() has three possible values: `Pos`, `Cmp`, `Sup` and applies to [ADJ]() and [ADV](). `Cmp` also aplies to the 'second' comparative with the prefix _po-_.  
* [Polarity]() has one value, `Neg`, and applies primarily to [PART](). The negative particle used with the verb is considered a separate token. However, [Polarity]() applies also to a number of lexemes in which negation is incorporated within the verb, predicative, or adverb (([VERB](), [ADV](): _няма_ “there is no”, _нягледзячы_ “regardless”).
* [PronType]() is used with pronouns ([PRON]()) and determiners ([DET]()).
* [NumType]() is used with numerals ([NUM]()).

### Other Lexical Features
* [Abbr]() applies to [NOUN]() and [PROPN]().
* [Foreign]() applies to [X]().
* [Poss]() applies to possessive determiners ([DET]()).
* [Reflex]() applies to pronouns ([PRON]()).

### Language-Specific Features

* [Variant]() distinguishes short and long forms of [adjectives](be-pos/ADJ) and [participles](be-pos/VERB), a Slavic-wide phenomenon. It has one value: `Short`, long forms are not labeled.   

## Syntax

### Core Arguments, Oblique Arguments and Adjuncts

* Nominal subject ([nsubj]()) is a noun phrase in the nominative case or in the genitive case (under negation or quantifier).
* The objects are divided to core objects, labeled [obj]() or [iobj](),
  and oblique objects, labeled [obl]().
  * All prepositional objects are labeled [obl]().
  * Adjuncts are labeled [obl]().
  * Temporal adjuncts, in the accusative case without preposition, are labeled [obl]().
* In passive clauses, the nominal subject is labeled with [nsubj:pass](); the semantic subject in the instrumental case is labeled [obl:agent]().

### Non-verbal Clauses

* Nominal clauses either use the copula _(быць)_ “to be” or present simple juxtaposition without copula.

### Relation Subtypes

* The following relation subtypes are used:
  * [acl:relcl]() for relative adnominal clauses;  
  * [aux:pass]() for auxiliaries in passive clauses; 
  * [nsubj:pass]() for nominal subjects of passive verbs;
  * [obl:agent]() for agents of passive verbs;
  * [nummod:gov]() for cardinal numbers that are attached as children of the counted noun but govern its case;  
  * [nummod:entity]() for cardinal numbers that are attached as children of the counted noun but govern its case;  
  * [advmod:discourse]() for adverbs or particles that that modify noun phrases and emphasize them;  
  * [flat:foreign]() for flat relations in foreign multi-word expressions and named entities;  
  * [flat:name]() for flat relations in names.  


---
**Instruction**: Give criteria for identifying core arguments (subjects and objects), and describe the range of copula constructions in nonverbal clauses. List all subtype relations used. Include links to language-specific relations definitions if any.

---

## Treebanks

There is one Belarusian UD treebanks:

  * [Belarusian-HSE](../treebanks/be_hse/index.html)
  
---
**Instruction**: Treebank-specific pages are generated automatically from the README file in the treebank repository and
from the data in the latest release. Link to the respective `*-index.html` page in the `treebanks` folder, using the language code
and the treebank code in the file name.

---
