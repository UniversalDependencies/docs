---
layout: relation
title: 'advcl'
shortdef: 'adverbial clause modifier'
udver: '2'
---

An adverbial clause modifier is a clause which modifies a verb or other predicate (adjective, etc.),
as a modifier not as a core complement. This includes things such as a temporal clause, consequence, conditional clause, purpose
clause, etc. The dependent must be clausal (or else it is an [advmod]()) and the dependent is the main predicate of the clause.

~~~ sdparse
Դեպքը պատահեց , երբ մթնում էր ։ \n The-accident happened , when it-was getting-dark .
advcl(պատահեց, մթնում)
advcl(happened, getting-dark)
~~~

~~~ sdparse
Եթե գիտեք ով է արել , պետք է ասեք ուսուցչին ։ \n If you-know who has-done , you must tell the-teacher .
advcl(ասեք, գիտեք)
advcl(must, you-know)
~~~

~~~ sdparse
Նա շտապում էր , որ ժամանակին տեղ հասնի ։ \n He rushed , in-order-to arrive in-time .
advcl(շտապում, հասնի)
advcl(rushed, arrive)
~~~

~~~ sdparse
Ղրիմում/PROPN[Case=Loc] կատարած/ADJ[VerbForm=Part] իր/DET[Poss=Yes] շրջագայության/NOUN[Case=Dat] ժամանակ/NOUN[Case=Nom] առատ/ADJ[Degree=Pos] հունձ/NOUN[Case=Nom] էր/AUX ունեցել/VERB ։ \n
obj(ունեցել, հունձ)
amod(հունձ, առատ)
aux(ունեցել, էր)
advcl(ունեցել, կատարած)
obl(կատարած, Ղրիմում)
obl:npmod(կատարած, շրջագայության)
nmod:npmod(շրջագայության, ժամանակ)
det:poss(շրջագայության, իր)
~~~

~~~ sdparse
Ղրիմում/PROPN[Case=Loc] կատարած/ADJ[VerbForm=Part] իր/DET[Poss=Yes] շրջագայության/NOUN[Case=Dat] ժամանակ/NOUN[Case=Nom] առատ/ADJ[Degree=Pos] հունձ/NOUN[Case=Nom] էր/AUX ունեցել/VERB ։ \n
obj(ունեցել, հունձ)
amod(հունձ, առատ)
aux(ունեցել, էր)
advcl(ունեցել, կատարած)
obl(կատարած, Ղրիմում)
obl:npmod(կատարած, ժամանակ)
nmod:poss(ժամանակ, շրջագայության)
det:poss(շրջագայության, իր)
~~~

=false
~~~ sdparse
Ղրիմում/PROPN[Case=Loc] կատարած/ADJ[VerbForm=Part] իր/DET[Poss=Yes] շրջագայության/NOUN[Case=Dat] ժամանակ/NOUN[Case=Nom] առատ/ADJ[Degree=Pos] հունձ/NOUN[Case=Nom] էր/AUX ունեցել/VERB ։ \n
obj(ունեցել, հունձ)
amod(հունձ, առատ)
aux(ունեցել, էր)
obl:npmod(ունեցել, ժամանակ)
nmod:poss(ժամանակ, շրջագայության)
det:poss(շրջագայության, իր)
amod(շրջագայության, կատարած)
obl(կատարած, Ղրիմում)
~~~

~~~ sdparse
Ղրիմում/PROPN[Case=Loc] կատարած/ADJ[VerbForm=Part] իր/DET[Poss=Yes] շրջագայության/NOUN[Case=Dat] ժամանակ/NOUN[Case=Nom] առատ/ADJ[Degree=Pos] հունձ/NOUN[Case=Nom] էր/AUX ունեցել/VERB ։ \n
obj(ունեցել, հունձ)
amod(հունձ, առատ)
aux(ունեցել, էր)
advcl(ունեցել, կատարած)
obl(կատարած, Ղրիմում)
obl:npmod(կատարած, շրջագայության)
nmod:npmod(շրջագայության, ժամանակ)
det:poss(շրջագայության, իր)
~~~

= Armenian tradtional grammar 
~~~ sdparse
Ղրիմում/PROPN[Case=Loc] կատարած/ADJ[VerbForm=Part] իր/DET[Poss=Yes] շրջագայության/NOUN[Case=Dat] ժամանակ/NOUN[Case=Nom] առատ/ADJ[Degree=Pos] հունձ/NOUN[Case=Nom] էր/AUX ունեցել/VERB ։ \n
obj(ունեցել, հունձ)
amod(հունձ, առատ)
aux(ունեցել, էր)
advcl(ունեցել, կատարած)
obl(կատարած, Ղրիմում)
amod(շրջագայության, կատարած)
case(շրջագայության, ժամանակ)
nmod:poss(շրջագայության, իր)
~~~
