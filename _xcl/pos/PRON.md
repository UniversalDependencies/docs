---
layout: postag
title: 'PRON'
shortdef: 'pronoun'
udver: '2'
---

### Definition

Pronouns are words that substitute for [nouns](NOUN) or noun phrases, whose meaning is recoverable from the linguistic or extralinguistic context. In Classical Armenian, pronouns inflect for number and case.
The Classical Armenian grammar traditionally extends the term _pronoun_ to words that substitute for [adjectives](ADJ). Such words are tagged as [determiners](DET) in UD in order to annotate the same thing same way across languages.
For instance, _այն_/_ayn_ ‘that’ is traditionally called a pronoun in the Classical Armenian grammar, regardless of context. However it can either substitute for a noun or an adjective, in which case it is tagged (DET).

### Types of pronouns

* Personal pronouns ([PronType=Prs]()): _ես_/_es_ ‘I’, _դու_/_dow_ ‘you’, etc. The third person pronoun _նա_/_na_ ‘(s)he, it’ coincides with the demonstrative _նա_/_na_ ‘that’.
* Emphatic pronoun ([PronType=Emp]()): _ինքն_/_inkʽn_ ‘he himself, she herself’.
* Reflexive pronouns ([PronType=Prs|Reflex=Yes]()): _իւր_/_iwr_ (gen.sg.) ‘of himself/herself’. The emphatic pronoun _ինքն_/_inkʽn_ and the word _անձն_/_anjn_ ‘person, soul, self’ can also be used as reflexive pronouns, especially in the nominative and accusative, which _իւր_ does not have.
* Demonstrative pronouns ([PronType=Dem]()): 
	* _սա_/_sa_ ‘this’, _դա_/_da_ ‘this (yours)’, _նա_/_na_ ‘that’; 
	* _այս_/_ays_ ‘this’, _այդ_/_ayd_ ‘this (yours)’, _այն_/_ayn_ ‘that’; 
	* _սոյն_/_soyn_ ‘this same’, _դոյն_/_doyn_ ‘this (yours) same’, _նոյն_/_noyn_ ‘that same’.
* Reciprocal pronouns ([PronType=Rcp]()):  _միմեանք_/_mimeankʽ_ ‘one another’, _իրեարք_/_irearkʽ_ ‘each other’.
* Interrogative pronouns ([PronType=Int]()): _ո՞վ_/_ov_, _ո՞_/_o_ ‘who?’, _զի՞_/_zi_, _զի՞նչ_/_zinčʽ_ ‘what?’. The interrogative pronominal adjective (determiner) _ո՞ր_/_or_ ‘which?’, traditionally counted as a pronoun, is tagged (DET).
* Indefinite pronouns ([PronType=Ind]()): there are two animate indefinite pronouns, _ոմն_/_omn_ ‘someone’ and _ոք_/_okʻ_ ‘anyone’, an inanimate indefinite pronoun, _ինչ_/_inčʻ_ ‘something, anything’, and a much less frequent _իմն_/_imn_ ‘something’. Like in the case of parallel pairs of adverbs (_երբեմն_/_erbemn_ ‘at some time’ and _երբեք_/_erbekʻ_ ‘at any time’, _ուրեմն_/_owremn_ ‘somewhere’, _ուրեք_/_owrekʻ_ ‘anywhere’, as well as unpaired _ուստեք_/_owstekʻ_ ‘from anywhere’), the difference in the use of the two animate indefinite pronouns can be described in terms of polarity. The negative polarity words, ending in _-ք_/_-kʻ_, are typically used in negative, interrogative, conditional, and relative clauses. By contrast the pronouns in _-մն_/_-mn_ are typically used in affirmative main clauses and point to a specific referent (see Klein 1997). The contrast is grasped with the `Definite=Ind` tag for the pronouns in _-ք_/_-kʻ_ and `Definite=Spec` tag for the ones in _-մն_/_-mn_.
* Relative pronoun ([PronType=Rel]()): _որ_/_or_ ‘that, which’. When the relative pronoun substitutes a noun in the relative clause and is tagged (PRON), when it functions as a pronominal adjective, it is tagged (DET).
* Collective pronouns ([PronType=Tot]()): _ամենեքեան_/_amenekʻean_ ‘all, everybody’, _եւթնեքեան_/_ewtʻnekʻean_ ‘all seven’, etc.

* Possessive, demonstrative, and interrogative pronouns with an adjectival function are classified as as [determiners](DET).

### References

Jensen, Hans. 1959. Altarmenische Grammatik. Heidelberg: Winter.

Klein, Jared S. 1997. Indefinite Pronouns, Polarity, and Related Phenomena in Classical Armenian: A Study Based on the Old Armenian Gospels. _Transactions of the Philological Society_ 95/2: 189-245.

Meillet, Antoine. 1913. _Altarmenisches Elementarbuch._ Heidelberg: Winters (<a href="https://archive.org/details/altarmenischesel00meil/page/n5/mode/2up" target="_blank">Internet Archive</a>)
<!-- Interlanguage links updated Ne 5. května 2024, 18:19:40 CEST -->
