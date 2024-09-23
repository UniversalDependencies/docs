---
layout: postag
title: 'PRON'
shortdef: 'pronoun'
udver: '2'
---

### Definition

Pronouns are words that substitute for [nouns](xcl-pos/NOUN) or noun phrases, whose meaning is recoverable from the linguistic or extralinguistic context. In Classical Armenian, pronouns inflect for number and case.
The Classical Armenian grammar traditionally extends the term _pronoun_ to words that substitute for [adjectives](xcl-pos/ADJ). Such words are tagged as `DET` in UD in order to annotate the same thing same way across languages.
For instance, այն/_ayn_ ‘that’ is traditionally called a pronoun in the Classical Armenian grammar, regardless of context. However it can either substitute for a noun or an adjective, in which case it is tagged `DET`.

### Types of pronouns

* Personal pronouns ([PronType=Prs](xcl-feat/PronType)): ես/_es_ ‘I’, դու/_dow_ ‘you’, etc. The third person pronoun նա/_na_ ‘(s)he, it’ coincides with the demonstrative նա/_na_ ‘that’.
* Reflexive pronouns ([PronType=Prs|Reflex=Yes](xcl-feat/PronType)): իւր/_iwr_ (gen.sg.) ‘of himself/herself’. The emphatic pronoun ինքն/_inkʽn_ and the word անձն/_anjn_ ‘person, soul, self’ can also be used as reflexive pronouns, especially in the nominative and accusative, which _իւր_ does not have.
* Demonstrative pronouns ([PronType=Dem](xcl-feat/PronType)): 
	* սա/_sa_ ‘this’, դա/_da_ ‘this (yours)’, նա/_na_ ‘that’; 
	* այս/_ays_ ‘this’, այդ/_ayd_ ‘this (yours)’, այն/_ayn_ ‘that’; 
	* սոյն/_soyn_ ‘this same’, դոյն/_doyn_ ‘this (yours) same’, նոյն/_noyn_ ‘that same’.
* Reciprocal pronouns ([PronType=Rcp](xcl-feat/PronType)):  միմեանք/_mimeankʽ_ ‘one another’, իրեարք/_irearkʽ_ ‘each other’.
* Interrogative pronouns ([PronType=Int](xcl-feat/PronType)): ո՞վ/_ov_, ո՞/_o_ ‘who?’, զի՞/_zi_, զի՞նչ/_zinčʽ_ ‘what?’. The interrogative pronominal adjective (determiner) ո՞ր/_or_ ‘which?’, traditionally counted as a pronoun, is tagged (DET).
* Indefinite pronouns: there are two animate indefinite pronouns, ոմն/_omn_ ‘someone’ and ոք/_okʻ_ ‘anyone’, an inanimate indefinite pronoun, ինչ/_inčʻ_ ‘something, anything’, and a much less frequent իմն/_imn_ ‘something’. Like in the case of parallel pairs of adverbs (երբեմն/_erbemn_ ‘at some time’ and երբեք/_erbekʻ_ ‘at any time’, ուրեմն/_owremn_ ‘somewhere’, ուրեք/_owrekʻ_ ‘anywhere’, as well as unpaired ուստեք/_owstekʻ_ ‘from anywhere’), the difference in the use of the two animate indefinite pronouns can be described in terms of polarity. The negative polarity words, ending in -ք/_-kʻ_, are typically used in negative, interrogative, conditional, and relative clauses. By contrast the pronouns in -մն/_-mn_ are typically used in affirmative main clauses and point to a specific referent (see Klein 1997). The contrast is grasped with the `Definite=Ind` tag for the forms in -ք/_-kʻ_ and `Definite=Spec` tag for the ones in -մն/_-mn_.
* Relative pronoun ([PronType=Rel](xcl-feat/PronType)): որ/_or_ ‘that, which’. When the relative pronoun substitutes a noun in the relative clause and is tagged (PRON), when it functions as a pronominal adjective, it is tagged (DET).
* Collective pronouns ([PronType=Tot](xcl-feat/PronType)): ամենեքեան/_amenekʻean_ ‘all, everybody’, եւթնեքեան/_ewtʻnekʻean_ ‘all seven’, etc.
* Possessive, demonstrative, and interrogative pronouns with an adjectival function are classified as as [determiners](xcl-pos/DET).

### References

Jensen, Hans. 1959. Altarmenische Grammatik. Heidelberg: Winter.

Klein, Jared S. 1997. Indefinite Pronouns, Polarity, and Related Phenomena in Classical Armenian: A Study Based on the Old Armenian Gospels. _Transactions of the Philological Society_ 95/2: 189-245.

Meillet, Antoine. 1913. _Altarmenisches Elementarbuch._ Heidelberg: Winters (<a href="https://archive.org/details/altarmenischesel00meil/page/n5/mode/2up" target="_blank">Internet Archive</a>)
