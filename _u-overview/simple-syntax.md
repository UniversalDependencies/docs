---
layout: base
title:  'Simple Clauses'
permalink: u/overview/simple-syntax.html
udver: '2'
---

# Simple Clauses

The UD annotation assumes the clause as one of the basic structures that we expect to find in all languages. A simple clause minimally consists of a predicate together with its core argument dependents, but may be extended with oblique modifiers. Core arguments are typically nominals, while oblique modifiers are either (oblique) nominals or adverbial modifiers. (In [complex clauses](complex-syntax.html), both core arguments and oblique modifiers can also be realized as subordinate clauses.) Finally, the predicate may be associated with function words that express different types of grammatical information such as tense, mood, aspect, voice, evidentiality, or type of subordination.


* [Intransitive and transitive clauses](#intransitive-and-transitive-clauses)
* [Nonverbal clauses](#nonverbal-clauses)
* [Non-core dependents](#non-core-dependents)
* [Function word dependents](#function-word-dependents)


## Intransitive and Transitive Clauses

In most clauses, the predicate takes the form of a verb, which may be intransitive or transitive.

~~~ sdparse
she left
nsubj(left, she)
~~~
~~~ sdparse
she left a note
nsubj(left, she)
obj(left, note)
~~~

An intransitive verb takes a single argument (usually referred to as S in the literature on linguistic typology) with the [u-dep/nsubj]() relation. A transitive verb in addition takes an argument with the [u-dep/obj]() relation. When deciding which relation to use with which argument in a transitive clause, the [u-dep/nsubj]() relation should be used with the argument that most resembles the proto-agent (often called A in linguistic typology) and that satisfies additional language-internal criteria for subjecthood based on case-marking, agreement and/or linear position with respect to the predicate. The [u-dep/obj]() relation should be used for the argument that most resembles the proto-patient (often called O or P in linguistic typology) and that satisfies relevant language-internal criteria. Note that, while case-marking (whether morphological or analytic) can provide important evidence in specific languages, case alignment should not be used to decide the assignment of core argument roles. Thus, in ergative languages, the patient-like argument of a transitive verb (O/P) will take the the [u-dep/obj]() relation despite the fact that it carries the same case marking as the [u-dep/nsubj]() argument (S) of an intranstive verb.

Some languages allow extended transitive clauses, where more than two dependents are realized as core arguments. The additional core arguments then receive the [u-dep/iobj]() relation (for "indirect object"), while the [u-dep/obj]() relation 
is reserved for the argument most patient-like non-subject argument. The criterion for deciding whether an additional dependent is a core argument is whether it has the typical encoding of a core argument with respect to case-marking, agreement and word order. For example, the English double object construction qualifies as an extended transitive clause because all three nominals appear without prepositions:

~~~ sdparse
she left him a note
nsubj(left, she)
obj(left, note)
iobj(left, him)
~~~

By contrast, the alternative construction where the recipient role is realized by a prepositional phrase is _not_ an extended transitive by our criteria, and the third participant should therefore be annotated as oblique in this case.

~~~ sdparse
she left a note to him
nsubj(left, she)
obj(left, note)
obl(left, him)
~~~

It follows that the semantic role cannot (by itself) be used to determine whether a dependent is core or not, nor can its status as an obligatory dependent. UD does not make a distinction between (obligatory) arguments and (optional) adjuncts, and oblique dependents can be either arguments or adjuncts. 

Note, finally, that not all languages allow extended transitives (and some do only in connection with special valency-changing operationssuch as applicatives). Hence, the [u-dep/iobj]() relation will not be used in all languages.

### Valency-Changing Operations

If passivization involves the promotion of an argument to subject position, then this argument can be 
annotated with a special subtype `nsubj:pass` to indicate that promotion has taken place. The subtype
`obl:agent` can be used to annotated the demoted subject (if present). 

~~~ sdparse
she left a note on the table
nsubj(left, she)
obj(left, note)
obl(left, table)
~~~
~~~ sdparse
a note was left on the table
nsubj:pass(left, note)
obl(left, table)
~~~
~~~ sdparse
a note was left by her on the table
nsubj:pass(left, note)
obl:agent(left, her)
obl(left, table)
~~~

Similar subtyping can be used for other valency-changing operations. With causatives, for example, subtypes
like `obj:caus` and `iobj:caus` can be used to indicate that an object is a demoted subject in relation to the non-causative form of the verb.

~~~ sdparse
Hasan koştu \n Hasan ran
nsubj(koştu, Hasan)
~~~
~~~ sdparse
(ben) Hasanı koşturdum \n I Hasan made-run
obj:caus(koşturdum, Hasanı)
~~~
~~~ sdparse
Hasan kitabı okudu \n Hasan book read
obj(okudu, kitabı)
~~~
~~~ sdparse
(ben) Hasana kitabı okuttum \n I I Hasan book made-read
obj(okuttum, kitabı)
iobj:caus(okuttum, Hasana)
~~~


## Nonverbal Clauses

A nonverbal predicate (nominal or adjective) takes a single argument with the [u-dep/nsubj]() relation.
The core argument relation is the same regardless of whether there is an overt copula linking the predicate
to the subject or not.

~~~ sdparse
she is my mother
nsubj(mother, she)
~~~
~~~ sdparse
она моя мать \n she my mother
nsubj(мать, она)
nsubj(mother, she)
~~~
~~~ sdparse
she is nice
nsubj(nice, she)
~~~
~~~ sdparse
она милая \n she nice
nsubj(милая, она)
nsubj(nice, she)
~~~

In order to achieve a consistent treatment of nonverbal predication in v2, we first define six categories of nonverbal predication that can be found cross-linguistically (with or without a copula):

1. Equation (aka identification): “she is my mother”
2. Attribution: “she is nice”
   2.1. Quantification: “they are two”
3. Location: “she is in the bathroom”
4. Possession: “the book is hers”
5. Benefaction: “the book is for her”
6. Existence: “there is food (in the kitchen)”

We then give the following guidelines for the analysis of these constructions:

* If there is no overt linking word (or if such a word can be omitted at least in some persons or tenses), then the predicative nominal is treated as the head of the clause regardless of which of the six categories it falls in. In languages with fixed SVO order (like English), the final nominal is the predicate and the first nominal is the subject. In free-word-order languages it is possible that the first nominal is the predicate, and distinguishing the subject from the predicate is based on language-specific criteria.
* If there is an overt linking word used in equational constructions (category 1), then that word is treated as a copula and marked with the [u-dep/cop]() dependency, and is not the head of the clause. **Exception:** If the predicative element in the equation is a clause, then the copula verb is treated as the head of the clause, with the following clause as a [u-dep/ccomp]() (to prevent that the head of the smaller clause gets two subjects). Note that in some languages it may be instead possible to analyze the clause as the subject ([u-dep/csubj]()), retaining the [u-dep/cop]() relation for the copula verb.
* If there is an overt word used in existential constructions (category 6), which is different from the copula in equational constructions (either a different lemma or with different syntax), then it should be regarded as the head of existential clauses, taking a subject (and often a locative [u-dep/obl]()).
* All other cases of putative copula constructions (categories 2-5) should be assimilated to the equational and existential cases as seems to make most sense according to the inherent logic of the language concerned. 
* A language should normally have at most one copula, but exceptions can be made in case of defective paradigms or if there are two verbs alternating in categories 1-5 (but not in 6) and where any meaning difference reflect at most TAME categories.

To illustrate how these guidelines apply to different languages, we now given parallel examples from English, Irish, Swedish, Czech, Russian and Turkish. 

### English

In English, the verb "to be" is used in all of (1-6), and a copula analysis is therefore used consistently, except for equated clauses (1b) and existentials (6), where the verb must be treated as the head of the clause.

(1a)

~~~ sdparse
she is my mother
nsubj(mother, she)
cop(mother, is)
~~~

(1b)

~~~ sdparse
the fact is that she is my mother
nsubj(is-3, fact)
ccomp(is-3, mother)
nsubj(mother, she)
cop(mother, is-6)
~~~

(2)

~~~ sdparse
she is nice
nsubj(nice, she)
cop(nice, is)
~~~

(3)

~~~ sdparse
she is in the kitchen
nsubj(kitchen, she)
cop(kitchen, is)
case(kitchen, in)
~~~

(4)

~~~ sdparse
it is hers
nsubj(hers, it)
cop(hers, is)
~~~

(5)

~~~ sdparse
it is for her
nsubj(her, it)
cop(her, is)
case(her, for)
~~~

(6a) 

~~~ sdparse
there is food
expl(is, there)
nsubj(is, food)
~~~

(6b) 

~~~ sdparse
there is food in the kitchen
expl(is, there)
nsubj(is, food)
obl(is, kitchen)
case(kitchen, in)
~~~

### Irish

Irish uses a copula verb in categories 1, 4 and 5, and a different verb in categories 2, 3 and 6. Not only the verb but also the word order is different.

(1) 

~~~sdparse
is ise mo mháthair \n COP her my mother
nsubj(mháthair, ise)
cop(mháthair, is)
~~~

(2) 

~~~sdparse
tá sí deas \n is she nice
nsubj(tá, sí)
xcomp(tá, deas)
~~~

(3)

~~~sdparse
tá sí sa seomra folctha \n is she in room bath
nsubj(tá, sí)
xcomp(tá, seomra)
~~~

(4)

~~~sdparse
is lei an leabhar \n COP with her the book
nsubj(leabhar, lei)
cop(leabhar, is)
~~~ 

(5)

~~~sdparse
is di an leabhar \n COP with her the book
nsubj(leabhar, di)
cop(leabhar, is)
~~~ 

(6)

~~~sdparse
tá bia ann
nsubj(tá, bia)
~~~~


### Czech

The Czech verb _být_ is used in all categories (1-6) and can be analyzed as copula everywhere except for pure existentials (without location) where no predicate other than the verb is available. Czech word order is free and it is not guaranteed that all constructions will come out as subject-copula-predicate. Reversed order (predicate-copula-subject) is less common but possible, even in the “equation” category (1). Czech is a pro-drop language which means that pronominal subjects are optional.

(1a)

~~~ sdparse
(ona) je moje matka \n she is my mother
nsubj(matka, (ona))
nsubj(mother, she)
cop(matka, je)
cop(mother, is)
~~~

(1b)

~~~ sdparse
faktem je , že ona je moje matka \n fact is , that she is my mother
cop(faktem, je-2)
cop(fact, is-11)
csubj(faktem, matka)
csubj(fact, mother)
nsubj(matka, ona)
nsubj(mother, she)
cop(matka, je-6)
cop(mother, is-15)
~~~

(2)

~~~ sdparse
(ona) je milá \n she is nice
nsubj(milá, (ona))
nsubj(nice, she)
cop(milá, je)
cop(nice, is)
~~~

(3)

~~~ sdparse
(ona) je v kuchyni \n she is in kitchen
nsubj(kuchyni, (ona))
nsubj(kitchen, she)
cop(kuchyni, je)
cop(kitchen, is)
case(kuchyni, v)
case(kitchen, in)
~~~

(4)

~~~ sdparse
to je její \n it is hers
nsubj(její, to)
nsubj(hers, it)
cop(její, je)
cop(hers, is)
~~~

(5)

~~~ sdparse
to je pro ni \n it is for her
nsubj(ni, to)
nsubj(her, it)
cop(ni, je)
cop(her, is)
case(ni, pro)
case(her, for)
~~~

(6a) 

~~~ sdparse
jídlo je \n food is
nsubj(je, jídlo)
nsubj(is, food)
~~~

(6b) 

~~~ sdparse
v kuchyni je jídlo \n in kitchen is food
nsubj(kuchyni, jídlo)
nsubj(kitchen, food)
cop(kuchyni, je)
cop(kitchen, is)
case(kuchyni, v)
case(kitchen, in)
~~~


### Russian

In Russian, there is no copula verb in the present tense. In the future and past tenses, the verb _быть_ "be" is used.
The same analysis applies to categories (1-5).

(1a)

~~~ sdparse
она моя мать \n she my mother
nsubj(мать, она)
nsubj(mother, she)
~~~

(1b)

When the second part is a clause, the demonstrative pronoun _то_ must be inserted. As a result, we have a different syntactic structure with different analysis: the clause formally modifies a nominal represented by the demonstrative.

~~~ sdparse
дело в том , что она моя мать \n fact in that , that she my mother
nsubj(том, дело)
nsubj(that-12, fact)
acl(том, мать)
acl(that-12, mother)
nsubj(мать, она)
nsubj(mother, she)
~~~

(2)

~~~ sdparse
она милая \n she nice
nsubj(милая, она)
nsubj(nice, she)
~~~

(3)

~~~ sdparse
она на кухне \n she in kitchen
nsubj(кухне, она)
nsubj(kitchen, she)
case(кухне, на)
case(kitchen, in)
~~~

(4)

~~~ sdparse
это ее \n it hers
nsubj(ее, это)
nsubj(hers, it)
~~~

(5)

~~~ sdparse
это для нее \n it for her
nsubj(нее, это)
nsubj(her, it)
case(нее, для)
case(her, for)
~~~

(6a) 

The form _есть_ is originally the 3rd person singular present indicative of the verb _быть_ (which also functions as copula). However, in Modern Russian this form is used only in existential statements, in both numbers and all persons. Past and future existential statements still use normal forms of _быть._

~~~ sdparse
есть еда \n is food
nsubj(есть, еда)
nsubj(is, food)
~~~

(6b) 

~~~ sdparse
есть еда на кухне \n is food in kitchen
nsubj(есть, еда)
nsubj(is, food)
obl(есть, кухне)
obl(is, kitchen)
case(кухне, на)
case(kitchen, in)
~~~


### Turkish

In Turkish, there are two copula verbs, _i-_ and _ol-_. The "true" copula is _i-_ which is defective, only having a limited number of tense forms (aorist and past), and cliticising. When a copula is needed in another tense, _ol-_ is employed. However, if there is a form of _i-_ then the equivalent form of _ol-_ takes on the meaning "become".

In the present tense, third person singular aorist non-formal then there is no overt suffix for third person singular. Unlike Russian, where the copula verb does not appear in any part of the present tense paradigm, in Turkish it appears in all persons except third person (compare 1a and 1b). This means that it is more like the nominative case in the paradigm (which also has a -Ø suffix, than like the Russian copula).

In Turkish (and indeed in most Turkic languages), existence is a syntactically different (see 6a and 6b), using an adjective _var_ "existent", and so gets a different structure.

(1a)

~~~ sdparse
O benim annem . \n she my mother
nsubj(annem, O)
nsubj(mother, she)
~~~

(1a)

~~~ sdparse
Ben senin baban -ım . \n I your father am
nsubj(baban, Ben)
cop(baban, -ım)
nsubj(father, I)
~~~

(1c)

~~~ sdparse
O benim annem -di . \n she my mother was
nsubj(annem, O)
cop(annem, -di)
nsubj(mother, she)
~~~


(2)

~~~ sdparse
O hoş . \n She nice
nsubj(hoş, O)
nsubj(nice, She)
~~~

(3)

~~~ sdparse
O mutfakta . \n She kitchen-in .
nsubj(mutfakta, O)
nsubj(kitchen-in, She)
~~~

(4)

~~~ sdparse
Bu onun . \n It hers .
nsubj(onun, Bu)
nsubj(hers, It)
~~~

(5)

~~~ sdparse
Bu onun için . \n It hers for .
nsubj(onun, Bu)
case(onun, için)
nsubj(hers, It)
case(hers, for)
~~~

(6a

~~~ sdparse
Yemek var . \n Food existing .
nsubj(var, Yemek)
nsubj(existing, Food)
~~~

(6b)

~~~ sdparse
Mutfakta yemek var . \n Kitchen-in food existing .
nsubj(var, yemek)
obl(var, Mutfakta)
nsubj(existing, food)
obl(existing, Kitchen-in)
~~~

## Non-Core Dependents

In addition to the core arguments, a predicate may have additional dependents whose grammatical encoding differs 
from that of core arguments with respect to case marking, agreement and/or linear position in the clause. All such
dependents are said to be oblique, regardless of whether they can be considered as arguments in the semantic sense. 
The [obl]() relation is used for oblique nominals, and the [advmod]() relation is used for adverbial modifiers.

~~~ sdparse
she left a note on the table
nsubj(left, she)
obj(left, note)
obl(left, table)
~~~
~~~ sdparse
she left a note in the morning
nsubj(left, she)
obj(left, note)
obl(left, morning)
~~~
~~~ sdparse
she left from home
nsubj(left, she)
obl(left, home)
~~~
~~~ sdparse
she left suddenly
nsubj(left, she)
advmod(left, suddenly)
~~~

In addition to the general [u-dep/obl]() relation, there are three special relations that are used for non-core dependents of a predicate: [u-dep/expl](), [u-dep/dislocated](), and [u-dep/vocative](). 

### Expletives

The [u-dep/expl]() relation captures expletive or pleonastic nominals. These are nominals that appear in an argument position of a predicate but which do not themselves satisfy any of the semantic roles of the predicate. The main predicate of the clause (the verb or predicate adjective or noun) is the governor. In English, this is the case for some uses of *it* and *there*: the existential *there*, and *it* when used in extraposition constructions.  (Note that both *it* and *there* also have non-expletive uses.) 

~~~ sdparse
There is a ghost in the room
expl(is, There)
~~~

~~~ sdparse
It is clear that we should decline .
expl(clear, It)
~~~

Some languages do not have expletives of the English sort, including most languages with free pro-drop (the ability to use zero anaphora rather than overt pronouns). In languages with expletives of this sort, they can be positioned where normally a core argument appears: the subject and direct object (and even indirect object) slots, as in the examples below. Note that in the analysis of these examples, we treat the postposed subject or clausal argument as a regular core argument, and mark the expletive with [u-dep/expl]().

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

A second, related, use of the [u-dep/expl]() relation is for cases of true clitic doubling.  For languages in which clitics and lexical nominals are ususally in complementary distribution – languages, such as French, which obey "Kayne's generalization" – then whichever of a clitic or a lexical nominal occurs will get the appropriate role, such as [u-dep/obj]() or [u-dep/iobj](). In such languages, when doubling does occur, such as in spoken French, the right analysis is to regard the lexical nominal as [dislocated]() (see the examples there). As such, the analysis will be the same as when a noun phrase doubles another noun phrase or a regular pronoun that fills a nominal argument position. However, other languages, such as Greek and Bulgarian, standardly allow doubling of a lexical nominal and a pronominal clitic, with the former still appearing in its regular role as an argument of the predicate. In these cases, if only one of the lexical nominal and the clitic appear in a clause, then whichever appears will be given the grammatical role of [u-dep/obj](), [u-dep/iobj](), etc. – parallel to the treatment of lexical nominals and pronouns in other languages, modulo the clitic pronoun having a different position in the sentence.  However, if both occur, the lexical nominal will be given the grammatical role of [u-dep/obj](), [u-dep/iobj](), etc., and the clitic will be treated as a pronominal copy, which does not receive its own semantic role, and hence will get the role [u-dep/expl](). Modulo the different word order, this is fairly parallel to the treatment of _it_ and _there_ in English mentioned above, where another phrase satisfies the semantic role of the predicate. Examples from Greek and Bulgarian follow:

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

The expletive relation is also used for reflexive pronouns (see the feature [u-feat/Reflex]())
attached to inherently reflexive verbs, i.e. verbs that cannot occur without the reflexive
pronoun and thus the pronoun does not play the role of a normal object
(otherwise it would be possible to substitute it with an irreflexive pronoun or other nominal).
A Czech example:

~~~ sdparse
Martin se bojí zvířat . \n Martin REFLEX fears animals .
expl(bojí, se)
expl(fears, REFLEX)
~~~

Further general discussion of expletives can be found in Postal, P. M., and G. K. Pullum (1988) “Expletive Noun Phrases in Subcategorized Positions,” _Linguistic Inquiry_ 19(4): 635–670. The status of clitic doubling, and arguments for the lexical nominal being an argument with the clitic a kind of pronominal copy, appear inter alia in Boris Harizanov (2014) [Clitic doubling at the syntax-morphology interface: A-movement and morphological merger in Bulgarian](http://stanford.edu/~bharizan/pdfs/Harizanov_2014_NLLT.pdf). _Natural Language and Linguistic Theory_.

### Dislocated

The [u-dep/dislocated]() relation is used for fronted or postposed elements
that do not fulfill the usual core grammatical relations of a
sentence. These elements often appear to be in the periphery of the sentence, and may be separated off with a comma intonation.

It is used for fronted elements that introduce the topic of a sentence, as in the following Japanese and Greek examples. The dislocated element attaches to the head of the clause to which it belongs:

~~~ sdparse
象 は 鼻 が 長い \n zoo wa hana ga naga-i \n elephant TOPIC nose SUBJ long-PRES
dislocated(長い-5, 象-1)
~~~

~~~ sdparse
to jani ton kserume poli kala \n the John-Acc him know-1pl very well 
dislocated(kserume, jani)
~~~

However, it would not be used for a topic-marked noun that is also the subject of the sentence; this would be an [nsubj]().

It is also used for postposed elements. The dislocated elements attach to the same governor as the dependent that they double for. Right dislocated elements are frequent in spoken languages. French and Greek examples follow.

~~~ sdparse
Il faut pas la manger , la plasticine \n It must not it eat , the playdough
obj(manger, la-4)
dislocated(manger, plasticine)
obj(eat, it-13)
dislocated(eat, playdough)
~~~

~~~ sdparse
ton kserume oli mas edho poli kala, to jani 
dislocated(kserume, jani)
~~~

### Vocatives

The [u-dep/vocative]() relation is used to mark a dialogue participant addressed in a text (common in conversations, dialogue, emails, newsgroup postings, etc.). The relation links the addressee's name to its host sentence. A vocative commonly co-occurs with a null subject, as in the first example below. If the nominal is clearly vocative in intent, the preference is to use the [u-dep/vocative]() relation.

~~~ sdparse
Guys , take it easy!
vocative(take, Guys)
~~~

~~~ sdparse
Marie , comment vas - tu ?
vocative(vas, Marie)
~~~


## Function Word Dependents

In addition to core and non-core dependents, the predicate of a clause may be modified by function words:

1. An `aux` modifies a verbal predicate by adding information relating to tense, aspect, mood, voice, or evidentiality.
2. A `cop` links a nonverbal predicate to its subject and may add information relating to tense, aspect, mood, voice, or evidentiality.
3. A `mark` indicates that the predicate heads a (specific type of) subordinate clause.

~~~ sdparse
she has left
nsubj(left, she)
aux(left, has)
~~~
~~~ sdparse
she is happy
nsubj(happy, she)
cop(happy, is)
~~~
~~~ sdparse
she has been happy
nsubj(happy, she)
cop(happy, been)
aux(happy, has)
~~~
~~~ sdparse
( she knows ) that it is raining
ccomp(knows, raining)
mark(raining, that)
~~~
~~~ sdparse
( she left ) because it was raining
advcl(left, raining)
mark(raining, because)
~~~

