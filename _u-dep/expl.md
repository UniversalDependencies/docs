---
layout: relation
title: 'expl'
shortdef: 'expletive'
udver: '2'
---

This relation captures expletive or pleonastic nominals. These are nominals that appear in an argument position of a predicate but which do not themselves satisfy any of the semantic roles of the predicate. The main predicate of the clause (the verb or predicate adjective or noun) is the governor. In English, this is the case for some uses of *it* and *there*: the existential *there*, and *it* when used in extraposition constructions.  (Note that both *it* and *there* also have non-expletive uses.) 

~~~ sdparse
There is a ghost in the room
expl(is, There)
~~~

~~~ sdparse
It is clear that we should decline .
expl(clear, It)
~~~

Some languages do not have expletives of the English sort, including most languages with free pro-drop (the ability to use zero anaphora rather than overt pronouns). In languages with expletives of this sort, they can be positioned where normally a core argument appears: the subject and direct object (and even indirect object) slots, as in the examples below. Note that in the analysis of these examples, we treat the postposed subject or clausal argument as a regular core argument, and mark the expletive with `expl`.

~~~ sdparse
There is a ghost in the room
expl(is, There)
nsubj(is, ghost)
obl(is, room)
~~~

~~~ sdparse
I believe there to be a ghost in the room
nsubj(believe, I)
expl(believe, there)
xcomp(believe, be)
nsubj(be, ghost)
obl(be, room)
~~~

~~~ sdparse
It is clear that we should decline .
expl(clear, It)
csubj(clear, decline)
~~~

~~~ sdparse
That we should decline is clear .
csubj(clear, decline)
~~~

~~~ sdparse
I mentioned it to Mary that Sue is leaving
nsubj(mentioned, I)
expl(mentioned, it)
obl(mentioned, Mary)
ccomp(mentioned, leaving)
~~~

A second, related, use of the `expl` relation is for cases of true clitic doubling.  For languages in which clitics and lexical nominals are ususally in complementary distribution – languages, such as French, which obey "Kayne's generalization" – then whichever of a clitic or a lexical nominal occurs will get the appropriate role, such as [obj]() or [iobj](). In such languages, when doubling does occur, such as in spoken French, the right analysis is to regard the lexical nominal as [dislocated]() (see the examples there). As such, the analysis will be the same as when a noun phrase doubles another noun phrase or a regular pronoun that fills a nominal argument position. However, other languages, such as Greek and Bulgarian, standardly allow doubling of a lexical nominal and a pronominal clitic, with the former still appearing in its regular role as an argument of the predicate. In these cases, if only one of the lexical nominal and the clitic appear in a clause, then whichever appears will be given the grammatical role of [obj](), [iobj](), etc. – parallel to the treatment of lexical nominals and pronouns in other languages, modulo the clitic pronoun having a different position in the sentence.  However, if both occur, the lexical nominal will be given the grammatical role of [obj](), [iobj](), etc., and the clitic will be treated as a pronominal copy, which does not receive its own semantic role, and hence will get the role `expl`. Modulo the different word order, this is fairly parallel to the treatment of _it_ and _there_ in English mentioned above, where another phrase satisfies the semantic role of the predicate. Examples from Greek and Bulgarian follow:

~~~ sdparse
Της τον έδωσε της Καίτης τον αναπτήρα \n PRON.Fem.Gen PRON.Masc.Acc gave ART.Fem.Gen Keti.Gen ART.Masc.Acc lighter.Acc
expl(έδωσε, Της-1)
iobj(έδωσε, Καίτης)
det(Καίτης, της-4)
expl(έδωσε, τον-2)
obj(έδωσε, αναπτήρα)
det(αναπτήρα, τον-6)
~~~

~~~ sdparse
Marija mu izprati pismo na rabotnika \n Maria 3.S.M.IO sent letter to the.worker
expl(izprati, mu)
obj(izprati, pismo)
iobj(izprati, rabotnika)
case(rabotnika, na)
~~~

## Reflexives

The expletive relation is also used for reflexive pronouns (see the feature [u-feat/Reflex]())
attached to inherently reflexive verbs, i.e. verbs that cannot occur without the reflexive
pronoun and thus the pronoun does not play the role of a normal object
(otherwise it would be possible to substitute it with an irreflexive pronoun or other nominal).

UD recognizes several functions of reflexive pronouns (clitics) that are usually distinguished with the help of subtypes
of the `expl` relation (see also the report from the [2015 Uppsala discussion of clitics](/2015-08-23-uppsala/clitics.html) where
this approach was approved):

* [expl:pv]() for reflexive clitics attached to inherently reflexive verbs (also called pronominal verbs in some grammars)
* [expl:pass]() for reflexive clitics attached to transitive verbs and acting as a voice marker (passive or mediopassive)
* [expl:impers]() for impersonal usage (works also with intransitive verbs)

A Czech example:

~~~ sdparse
Martin se bojí zvířat . \n Martin REFLEX fears animals .
expl:pv(bojí, se)
expl:pv(fears, REFLEX)
~~~

Further general discussion of expletives can be found in Postal, P. M., and G. K. Pullum (1988) “Expletive Noun Phrases in Subcategorized Positions,” _Linguistic Inquiry_ 19(4): 635–670. The status of clitic doubling, and arguments for the lexical nominal being an argument with the clitic a kind of pronominal copy, appear inter alia in Boris Harizanov (2014) [Clitic doubling at the syntax-morphology interface: A-movement and morphological merger in Bulgarian](http://stanford.edu/~bharizan/pdfs/Harizanov_2014_NLLT.pdf). _Natural Language and Linguistic Theory_.
