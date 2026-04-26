---
layout: relation
title: 'obl'
shortdef: 'oblique nominal'
udver: '2'
---

The `obl` relation is used for a nominal (noun, pronoun, noun phrase) functioning as a non-core (oblique) argument or adjunct. This means that it functionally corresponds to an adverbial attaching to a verb, adjective or other adverb.

The `obl` relation can be further specified by the case. In conjunction with the [case]() relation, it provides a uniform analysis for:

* variant forms with case:

~~~ sdparse
երեք հետ պատեհ է որ ձենել տայ՝ թէ եկէք ի հնազանդութիւն. թէ գան, նա զամէնն հնազանդութեամբ բերէ եւ չտայ սպաննել \n erek’ het pateh ē or jenel tay՝ t’ē ekēk’ i hnazandowt’iwn. t’ē gan, na zamēnn hnazandowt’eamb berē ew čtay spannel . \n It is fitting to have it announced three times: 'Come into submission.' If they come, then he shall bring them all into obedience and shall not allow them to be killed .
obl(ձենել, հետ)
obl(announced, times)
obl(եկէք, հնազանդութիւն)
obl(Come, submission)
case(submission, into)
obl(բերէ, հնազանդութեամբ)
obl(bring, obedience)

~~~

* Dative, ablative, instrumental and locative alternations where the prepositional construction gets a similar analysis to the bare noun phrase:

~~~ sdparse
Երեխաներին/NOUN[Case=Dat] նոր/ADJ հագուստ/NOUN[Case=Nom] գնեց/VERB ։ \n
obj(գնեց, հագուստ)
amod(հագուստ, նոր)
obl(գնեց, Երեխաներին)
~~~

~~~ sdparse
Երեխաների/NOUN[Case=Dat] համար/ADP նոր/ADJ հագուստ/NOUN[Case=Nom] գնեց/VERB ։ \n
obj(գնեց, հագուստ)
amod(հագուստ, նոր)
obl(գնեց, Երեխաների)
case(Երեխաների, համար)
~~~

~~~ sdparse
Նրանք/PROPN հմտացել/VERB են/AUX այդ/DET աշխատանքում/NOUN[Case=Loc] ։ \n
obl(հմտացել, աշխատանքում)
det(աշխատանքում, այդ)
~~~

~~~ sdparse
Նրանք/PROPN հմտացել/VERB են/AUX այդ/DET աշխատանքի/NOUN[Case=Dat] մեջ/ADP[Case=Nom] ։ \n
obl(հմտացել, աշխատանքի)
case(աշխատանքի, մեջ)
det(աշխատանքի, այդ)
~~~

* Dative noun phrases with benefactive or possessive role (i.e. if the verb does not subcategorize for a single dative object and if it is not a verb of giving (or similar), where the dative could be interpreted as the recipient:

~~~ sdparse
Նրան/PROPN[Case=Dat] սուրճ/NOUN[Case=Nom] եփեց/VERB ։ \n He-made (for) him coffee .
obl(եփեց, Նրան)
obl(He-made, him)
obj(եփեց, սուրճ)
obj(He-made, coffee)
~~~

* `obl` is also used for temporal and locational nominal modifiers as bare nominals or something syntactically a noun phrase in a sentence:

~~~ sdparse
Ամռանը/NOUN[Case=Dat] հանդիպեցի/VERB նրան/PRON[Case=Dat] սրճարանում/NOUN[Case=Loc] ։ \n I-met him in-summer in-the-cafe .
obl(հանդիպեցի, Ամռանը)
obl(հանդիպեցի, սրճարանում)
obl(I-met, in-summer)
obl(I-met, in-the-cafe)
~~~

~~~ sdparse
Ղրիմում/PROPN[Case=Loc] կատարած/VERB[VerbForm=Part] իր/DET[Poss=Yes] շրջագայության/NOUN[Case=Dat] ժամանակ/NOUN[Case=Nom] առատ/ADJ[Degree=Pos] հունձ/NOUN[Case=Nom] էր/AUX ունեցել/VERB ։ \n
obj(ունեցել, հունձ)
amod(հունձ, առատ)
aux(ունեցել, էր)
obl(ունեցել, ժամանակ)
nmod:poss(ժամանակ, շրջագայության)
det:poss(շրջագայության, իր)
acl(շրջագայության, կատարած)
obl(կատարած, Ղրիմում)
~~~

Note, that we treat a closed set of postpositions (traditionally known as “improper adpositions”) as localizers (see [ADP]() for a list of localizers.) The head of the localizer is the noun or the main verb of the clause preceding it. When it follows a noun, it receives the [case:loc]() relation label. Although a few localizers have further grammaticalized into adverbials denoting spatial concepts, localizers with the adverbial function are still tagged as `ADP`, but are labeled with additional features and with the dependency relation `obl`.

~~~ sdparse
Մոտովս/ADP[AdpType=Post|Case=Ins|Number[psor]=Sing|Person[psor]=1] անցան/VERB[Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Subcat=Intr|Tense=Past|VerbForm=Fin|Voice=Mid] երկու/NUM[NumForm=Word|NumType=Card] սիլուետներ/NOUN[Animacy=Inan|Case=Nom|Definite=Ind|Number=Plur] ։/PUNCT \n Two silhouettes passed by-me .
nsubj(անցան, սիլուետներ)
obl(անցան, Մոտովս)
nummod(սիլուետներ, երկու)
punct(անցան, ։)
nsubj(passed, silhouettes)
obl(passed, by-me)
nummod(silhouettes, Two)
punct(passed, .)
~~~

We use [obl:agent]() for the agent of a passive verbs. Note, that the `obl` relation is used for the oblique arguments instead of [obj]() (i.e., prepositional objects, in Armenian grammar traditionally called _adpositional indirect objects_.) 
<!-- Interlanguage links updated St 12. listopadu 2025, 09:22:22 CET -->
