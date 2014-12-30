---
layout: relation
title: 'expl'
shortdef: 'expletive'
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

Some languages do not have expletives of the English sort, including most languages with free pro-drop (the ability to use zero anaphora rather than over pronouns). In languages with expletives of this sort, they can be positioned where normally a core argument appears: the subject and direct object slots, as in the examples below. Note that in the analysis of these examples, we treat the postposed subject or clausal argument as a regular core argument, and mark the expletive with `expl`.

~~~ sdparse
There is a ghost in the room
expl(is, There)
nsubj(is, ghost)
nmod(is, room)
~~~

~~~ sdparse
I believe there to be a ghost in the room
nsubj(believe, I)
expl(believe, there)
xcomp(believe, be)
nsubj(be, ghost)
nmod(be, room)
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
nmod(mentioned, Mary)
ccomp(mentioned, leaving)
~~~

A second, related, use of the `expl` relation is for cases of true clitic doubling.  For languages in which clitics and lexical nominals are ususally in complementary distribution – languages, such as French, which obey "Kayne's generalization" – then whichever of a clitic or a lexical nominal occurs will get the appropriate role, such as `dobj` or `iobj`, and when doubling does occur in the spoken language, the right analysis is to regard the lexical nominal as [dislocated]() (see the examples there). However, other languages, such as Greek and Bulgarian allow free doubling of a lexical nominal and a pronominal clitic, with the former still appearing in its regular role as an argument of the predicate. In these cases, if only one of the lexical nominal and the clitic appear in a clause, then whichever appears will be given the grammatical role of `dobj`, `iobj`, etc. – parallel to the treatment of lexical nominals and pronouns in other languages, modulo the clitic pronoun having a different position in the sentence, but if both occurs, the lexical nominal will be given the grammatical role of `dobj`, `iobj`, etc., and the clitic will be treated as a pronominal copy, which does not receive its own semantic role, and hence will get the role `expl`. Modulo the different word order, this is fairly parallel to the treatment of _it_ and _there_ in English mentioned above, where another phrase satisfies the semantic role of the predicate. Examples from Greek and Bulgarian follow:

~~~ sdparse
Της τον έδωσε της Καίτης τον αναπτήρα \\
PRON.Fem.Gen PRON.Masc.Acc gave ART.Fem.Gen Keti.Gen ART.Masc.Acc lighter.Acc
expl(έδωσε, Της-1)
iobj(έδωσε, Καίτης)
det(Καίτης, της-4)
expl(έδωσε, τον-2)
dobj(έδωσε, αναπτήρα)
det(αναπτήρα, τον-6)
~~~

~~~ sdparse
Marija mu izprati pismo na batonika \n Maria 3.S.M.IO sent letter to the.worker
expl(izprati, mu)
dobj(izprati, pismo)
iobj(izprati, rabotnika)
case(rabotnika, na)
~~~

Further general discussion of expletives can be found in Postal, P. M., and G. K. Pullum (1988) “Expletive Noun Phrases in Subcategorized Positions,” _Linguistic Inquiry_ 19(4): 635–670. The status of clitic doubling, and arguments for the lexical nominal being an argument, with the clitic a kind of pronominal copy appear inter alia in [Boris Harizanov. 2014. Clitic doubling at the syntax-morphology interface: A-movement and morphological merger in Bulgarian](http://stanford.edu/~bharizan/pdfs/Harizanov_2014_NLLT.pdf). _Natural Language and Linguistic Theory_.
