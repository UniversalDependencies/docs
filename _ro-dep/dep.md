---
layout: relation
title: 'dep'
shortdef: 'unspecified dependency'
---

This document is a placeholder for the language-specific documentation
for `dep`.


~~~ sdparse
ROOT Jos mafia  ! \n Down with_the_mafia ! 
root(ROOT-1, Jos-2)
nsubj(Jos-2, mafia-3)
punct(Jos-2, !-4)
~~~

~~~ sdparse
ROOT Poate că întârzie . \n He may be late .
root(ROOT-1, Poate-2)
csubj(Poate-2, întârzie-4)
mark(întârzie-4, că-3)
punct(Poate-2, .-5)
~~~

~~~ sdparse
ROOT Marș afară ! \n Shoo out !
root(ROOT-1, Marș-2)
advmod(Marș-2, afară-3)
punct(Marș-2, !-4)
~~~

~~~ sdparse
ROOT Maria este sora mea . \n Mary is sister-the my .
root(ROOT-1, sora-4)
cop(sora-4, este-3)
nsubj(sora-4, Maria-2)
amod:poss(sora-4, mea-5)
punct(sora-4, .-6)
~~~

~~~ sdparse
ROOT Maria este înaltă . \n Mary is tall .
root(ROOT-1, înaltă-4)
cop(înaltă-4, este-3)
nsubj(înaltă-4, Maria-2)
punct(înaltă-4, .-5)
~~~

~~~ sdparse
ROOT În parc . \n In park .
root(ROOT-1, parc-3)
case(parc-3, În-2)
punct(parc-3, .-4)
~~~

~~~ sdparse
ROOT În parc , cu Dan . \n In park , with Dan .
root(ROOT-1, parc-3)
case(parc-3, În-2)
punct(parc-3, ,-4)
nmod(parc-3, Dan-6)
case(Dan-6, cu-5)
punct(parc-3, .-7)
~~~

~~~ sdparse
ROOT He has become our department expert
root(ROOT-1, become-4)
nsubj(become-4, He-2)
aux(become-4, has-3)
nmod:poss(expert-7, our-5)
compound(expert-7, department-6)
xcomp(become-4, expert-7)
~~~

~~~ sdparse
ROOT Copilul a însemnat tema . \n Child-the has marked homework-the .
root(ROOT-1, însemnat-4)
nsubj(însemnat-4, Copilul-2)
aux(însemnat-4, a-3)
dobj(însemnat-4, tema-5)
punct(însemnat-4, .-6)
~~~

~~~ sdparse
ROOT Răspunsul a însemnat diplomație . \n Answer-the has meant diplomacy .
root(ROOT-1, însemnat-4)
nsubj(însemnat-4, Răspunsul-2)
aux(însemnat-4, a-3)
xcomp(însemnat-4, diplomație-5)
punct(însemnat-4, .-6)
~~~

~~~ sdparse
ROOT Tata vine și el imediat . \n Father-the comes and he immediately .
root(ROOT-1, vine-3)
nsubj(vine-3, Tata-2)
advmod(el-5, și-4)
expl(vine-3, el-5)
advmod(vine-3, imediat-6)
punct(vine-3, .-7)
~~~

~~~ sdparse
ROOT Vine și el imediat . \n Comes and he immediately .
root(ROOT-1, vine-2)
advmod(el-4, și-3)
expl(vine-2, el-4)
advmod(vine-2, imediat-5)
punct(vine-2, .-6)
~~~

~~~ sdparse
ROOT Fata a dat nume păpușilor . \n Girl-the has given names dolls-to-the .
root(ROOT-1, dat-4)
nsubj(dat-4, Fata-2)
aux(dat-4, a-3)
dobj(dat-4, nume-5)
iobj(dat-4, păpușilor-6)
punct(dat-4, .-7)
~~~

~~~ sdparse
ROOT Bunica i- a  învățat pe copii o poezie . \n Grandmother-the CL.3.pl.Acc has taught PE children a poem .
root(ROOT-1, învățat-5)
nsubj(învățat-5, Bunica-2)
expl(învățat-5, i--3)
aux(învățat-5, a-4)
iobj(învățat-5, copii-7)
case(copii-7, pe-6)
det(poezie-9, o-8)
dobj(învățat-5, poezie-9)
punct(învățat-5, .-10)
~~~

~~~ sdparse
ROOT Bunica a  învățat o poezie . \n Grandmother-the has learned a poem .
root(ROOT-1, învățat-4)
nsubj(învățat-4, Bunica-2)
aux(învățat-4, a-3)
det(poezie-6, o-5)
dobj(învățat-4, poezie-6)
punct(învățat-4, .-7)
~~~

~~~ sdparse
ROOT Ascult muzică . \n Listen-I music .
root(ROOT-1, Ascult-2)
dobj(Ascult-2, muzică-3)
punct(Ascult-2, .-4)
~~~

~~~ sdparse
ROOT Îl ascult pe Ion/el . \n CL.3.sg.Acc. listen-I PE John/him .
root(ROOT-1, ascult-3)
expl(ascult-3, Îl-2)
case(Ion/el-5, pe-4)
dobj(ascult-3, Ion/el-5)
punct(ascult-3, .-6)
~~~

~~~ sdparse
ROOT Îl ascult . \n CL.3.sg.Acc. listen-I .
root(ROOT-1, ascult-3)
dobj(ascult-3, Îl-2)
punct(ascult-3, .-4)
~~~

~~~ sdparse
ROOT Dau de mâncare pisicii . \n Give-I of food cat-to-the .
root(ROOT-1, Dau-2)
case(mâncare-4, de-3)
dobj(Dau-2, mâncare-4)
iobj(Dau-2, pisicii-5)
punct(Dau-2, .-6)
~~~

~~~ sdparse
ROOT Le dau de mâncare copiilor/lor . \n Cl.3.pl.Dat. give-I of food children-to-the/them .
root(ROOT-1, dau-3)
expl(dau-3, Le-2)
case(mâncare-5, de-4)
dobj(dau-3, mâncare-5)
iobj(dau-3, copiilor/lor-6)
punct(dau-3, .-7)
~~~

~~~ sdparse
ROOT Le dau de mâncare . \n Cl.3.pl.Dat. give-I of food .
root(ROOT-1, dau-3)
iobj(dau-3, Le-2)
case(mâncare-5, de-4)
dobj(dau-3, mâncare-5)
punct(dau-3, .-6)
~~~
