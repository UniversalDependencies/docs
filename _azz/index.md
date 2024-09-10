---
layout: base
title:  'Highland Puebla Nahuatl UD'
udver: '2'
---

# UD for Highland Puebla Nahuatl <span class="flagspan"><img class="flag" src="../../flags/svg/MX.svg" /></span>

## Tokenization and Word Segmentation

* Generally, words are delimited by whitespace characters. Exceptions to this rule are documented below.
* When one or more punctuation characters is used to introduce or end quoted speech (such as "-¿Keni tika?"), the sequence of punctuation characters are typically treated as a single unit, and tokenized (separated from the preceding or following word).
* There are three words that are often written together with an adjacent word in some Nahuatl texts, and we tokenize them. These are:
- The determiner/subordinator `in` (often written `n`), which can attach orthographically to the following NOUN, PRON, or VERB (e.g. nitskuinti => n itskuinti "the dog").
* In addition, given the high frequency of Spanish in Nahuatl data, we recognize the two main classes of multi-word tokens from Spanish:
  * Contractions of prepositions and definite articles.
    Example: _al = a + el_ “to the”, _del = de + el_ “of the”.
  * Certain verb forms (infinitives, imperatives, present participles) are writen together with
    object clitic pronouns, while with other verb forms the clitics are written as separate words.
    Examples: _convertirse = convertir + se_ “to become” (lit. “to convert itself”), _hacerlo_ “to do it”.

## Morphology


### Tags

* _NOUN_: Most nouns take one of a small set of Absolutive endings in the singular, unpossessed form (`-t`, `-ti`, `-li`) and can be inflected for number and diminution. There are generally two distinct plural suffixes depending on whether the noun is possessed (_-wan/huan/uan_ if possessed, _-meh/mej_ otherwise). We also include Relational Nouns in this category. This subclass of NOUN expresses the relation (typically) between a nominal and a predicate. They are typically similar in meaning to prepositions `on', `inside of', `next to', `with', etc. in English. They take the nominal morphology agreeing with Person and Number the possessor.

* _VERB_ : Verbs are easily distinguishable from other word classes due to their inflectional and derivational morphology. They obligatorily inflect for person and number of subject in intransitives, and for subject and object in transitives. Tense and aspect are also marked on the verb. Derivational verbal morphology includes adverbials, reflexive, directionality, compounding and the incorporation of core arguments (typically objects).

* _DET_: Determiners always precede a noun, and include _in_, demonstratives _nin_/_ninkeh_ `this/these' and _non_/_nonkeh_ `that/those'.

### Features

* _Nominal Features_: We mark NOUNs for Number and Number of possessor (Number\[psor\]). Spanish words that have not undergone much Nahuatl phonological adaptation are given the feature-value `Foreign=Yes`. We also use the feature `Dim=Yes` when diminutive/reverential morphology is used. The feature NounType is used to distinguish Relational Nouns (NounType=Rel).

* _Verbal Features_: Since Nahuatl Verbs can and typically do represent all of their arguments with morphology, we used layered features for Number and Person of the subj/obj/iobj. For the indefinite object prefixes, which change depending on whether the object is human, we use Animacy=\[Hum, Nhum\]. Tense and Aspect features are also used.


## Syntax

* _Core and non-core arguments_: Subjects of intransitive verbs, and both subjects and objects of transitive verbs, are obligatorily marked on the verbal via prefixation, and the phrase that is indexed by the agreement marker is often omitted. In ditransitive verbs, only the subject and indirect object prefixes can appear, unless the direct object has the 3rd person and is plural. Non-core arguments are never marked in the verb. They include relational nouns, or can be introduced by a Spanish preposition.

* _Conjunction and parataxis_: Throughout the corpus, we frequently observe sentences containing two or more adjacent clauses without an explicit coordinating conjunction. These cases are somewhat ambiguous with respect to their syntactic relationship, as they could be analyzed as conjunction (`conj`), which typically requires an explicit conjunction but can appear without one, e.g. in a list of items, or `parataxis`. Since the difference between these two relations can be ambiguous, we established a straightforward rule to facilitate ease-of-annotation: When the two clauses share an argument, use `conj`; otherwise, use `parataxis`.

## Treebanks

There is 1 Highland Puebla Nahuatl UD treebank:

  * [Highland Puebla Nahuatl-ITML](../treebanks/azz_itml/index.html)
