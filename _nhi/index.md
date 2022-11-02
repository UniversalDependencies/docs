---
layout: base
title:  'Western Sierra Puebla Nahuatl UD'
udver: '2'
---

# UD for Western Sierra Puebla Nahuatl <span class="flagspan"><img class="flag" src="../../flags/svg/MX.svg" /></span>

## Tokenization and Word Segmentation

* Generally, words are delimited by whitespace characters. Exceptions to this rule are documented below.
* When one or more punctuation characters is used to introduce or end quoted speech (such as "-¿Keni tika?"), the sequence of punctuation characters are typically treated as a single unit, and tokenized (separated from the preceding or following word).
* There are three words that are often written together with an adjacent word in some Nahuatl texts, and we tokenize them. These are:
- The "augment" o, which is often written on the left-hand side of the following verb (e.g. onimitztlahtlanih => o nimitztlahtlanih `I asked you`)
- The optative auxiliary "ma" or "mo" (e.g. amo mapinauican => amo ma pinauican "May they not be embarrased." )
- The determiner/subordinator `in` (often written `n`), which can attach orthographically to the following NOUN, PRON, or VERB (e.g. nitskuintli => n itskuintli "the dog").
* In addition, given the high frequency of Spanish in Nahuatl data, we recognize the two main classes of multi-word tokens from Spanish:
  * Contractions of prepositions and definite articles.
    Example: _al = a + el_ “to the”, _del = de + el_ “of the”.
  * Certain verb forms (infinitives, imperatives, present participles) are writen together with
    object clitic pronouns, while with other verb forms the clitics are written as separate words.
    Examples: _convertirse = convertir + se_ “to become” (lit. “to convert itself”), _hacerlo_ “to do it”.


## Morphology


### Tags

* _NOUN_: Most nouns take one of a small set of Absolutive endings in the singular, unpossessed form (`-tl`, `-tli`, `-li`) and can be inflected for number and diminution. There are generally two distinct plural suffixes depending on whether the noun is possessed (_-wan/huan/uan_ if possessed, _-meh/mej_ otherwise). We also include Relational Nouns in this category. This subclass of NOUN expresses the relation (typically) between a nominal and a predicate. Thet are typically similar in meaning to prepositions `on', `inside of', `next to', `with', etc. in English. They take the nominal morphology agreeing with Person and Number the possessor.

* _VERB_ : Verbs are easily distinguishable from other word classes due to their inflectional and derivational morphology. They obligatorily inflect for person and number of subject in intransitives, and for subject and object in transitives. Tense and aspect are also marked on the verb. Derivational verbal morphology includes adverbials, reflexive, directionality, compounding and the incorporation of core arguments (typically objects).

* _DET_: Determiners always precede a noun, and include _in_ (frequently written _n_ and joined to the following noun), demonstratives _nin_/_ninkeh_ `this/these' and _non_/_nonkeh_ `that/those', and two other demonstrative determiners that are compounds of the words `here' and `there' with the clitic copula: _nikanka_ and _neka_. The latter two words can and do also occur as pronouns (`this/that thing') and verb phrases (``It is here/there''). Other common determiners are quantifiers such as _nochi_ `all' and _siki_ `some'.

* _AUX_: We tag the verb ``katki" (to be) as AUX when it acts as a copula, which only happens in Nahuatl in the non-present, (e.g. _okatka tsotsokotsin_ ``It was small") or in the optative mood (e.g. _totahtsin Dios mo i mowantsin_ ``May god be with you"). When it is used to mean "exist", it is tagged as VERB (e.g. _katki se tlakatl_ "there is a man"). Less frequently, the third-person singular Pronoun _yehwatl_ can be a copula, in which case it is also tagged as AUX. Additionally, given the high frequency of Spanish code-switching in most Nahuatl language data, we include the Spanish auxilieries _estar_, _ser_, and _haber_. The tense/aspect auxiliaries _o_ and _ok_, the optative auxiliary _ma/mo_, and the evidential _mach_ also are all tagged as AUX. Finally, the verbs _pewa_ ``to start" and _wili_ ``to be able to", are tagged as AUX when they immediately precede the main verb but don't agree with it in Number/Person (e.g. _pewas sekixtia_ ``We start to take it out (literally it will start we take it out)").

* _ADV_: In addition to obvious adverbial words, we also tag as ADV a number of words that are sometimes referred to as Evidentials in Nahuatl, such as _tlakah_ ``as it turns out", _mox_ (question word), and _xanki_ ``is it true".


### Features

* _Nominal Features_: We mark NOUNs for Number and Number of possessor (Number\[psor\]). Spanish words that have not undergone much Nahuatl phonological adaptation are given the feature-value `Foreign=Yes`. We also use the feature `Dim=Yes` when diminutive/reverential morphology is used. The feature NounType is used to distinguish Relational Nouns (NounType=Rel).

* _Verbal Features_: Since Nahuatl Verbs can and typically do represent all of their arguments with morphology, we used layered features for Number and Person of the subj/obj/iobj. For the indefinite object prefixes, which change depending on whether the object is human, we use Animacy=\[Hum, Nhum\]. Tense and Aspect features are also used.


## Syntax

* _Core and non-core arguments_: Subjects of intransitive verbs, and both subjects and objects of transitive verbs, are obligatorily marked on the verbal via prefixation, and the phrase that is indexed by the agreement marker is often omitted. In ditransitive verbs, only the subject and indirect object prefixes can appear, unless the direct object has the 3rd person and is plural. Non-core arguments are never marked in the verb. They include relational nouns, or can be introduced by a Spanish preposition.

* _Focalization and clefting_: Both core and non-core arguments can be focalized when followed by an \emph{n}-marked subordinate clause. This construction is likely historically related to the clefting-construction in colonial Nahuatl. This type of clefting is also common in the Irish UD treebank, and we analyze them similarly, with the focalized element as the matrix copular-sentence, and the subordinated clause as its clausal subject (`csubj`).

* _Conjunction and parataxis_: Throughout the corpus, we frequently observe sentences containing two or more adjacent clauses without an explicit coordinating conjunction. These cases are somewhat ambiguous with respect to their syntactic relationship, as they could be analyzed as conjunction (`conj`), which typically requires an explicit conjunction but can appear without one, e.g. in a list of items, or `parataxis`. Since the difference between these two relations can be ambiguous, we established a straightforward rule to facilitate ease-of-annotation: When the two clauses share an argument, use `conj`; otherwise, use `parataxis`.

## Treebanks

There are [1](../treebanks/nhi-comparison.html) Western Sierra Puebla Nahuatl UD treebanks:

  * [Western Sierra Puebla Nahuatl-ITML](../treebanks/nhi_a/index.html)
