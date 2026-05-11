---
layout: relation
title: 'xcomp'
shortdef: 'open clausal complement'
udver: '2'
---

An open clausal complement (`xcomp`) of a verb or an adjective is a core argument of the verb, which is without its own subject and for which the reference of the subject is necessarily determined by an argument external to the `xcomp`. The third requirement is often referred to as _obligatory control_.

An `xcomp` can also be described as a predicative complement. The subject of the `xcomp` is normally, but not always, controlled by the object of the next higher clause, if there is one, or else by the subject of the next higher clause. These clauses tend to be non-finite in many languages, but they can be finite as well.

~~~ sdparse
Aš pradėjau čia dirbti vakar . \n I started working here yesterday .
xcomp(pradėjau, dirbti)
xcomp(started, working)
~~~

In Lithuanian, the relation `xcomp` is used to annotate infinitival complements in complex verbal predicates (including secondary infinitives) when they occur with modal verbs such as _galėti (can), sugebėti (be able), pajėgti (be capable), pavykti (succeed), privalėti (must), turėti (have to), reikia (need), tenka (have to), norėti (want), geisti (desire), trokšti (long for), ketinti (intend), vertėti (be worth)_, as well as with aspectual (phase) verbs such as _pradėti (start), baigti (finish), imti (begin)_, and _mesti (stop)_.

~~~ sdparse
Mes norime susitikti . \n We want to-meet .
xcomp(norime, susitikti)
xcomp(want, to-meet)
~~~

~~~ sdparse
Jie pradėjo juoktis . \n They started laughing .
xcomp(pradėjo, juoktis)
xcomp(started, laughing)
~~~

~~~ sdparse
Senelis nori pajėgti dirbti . \n Grandfather wants to-be-able to-work .
xcomp(nori, pajėgti)
xcomp(pajėgti, dirbti)
xcomp(wants, to-be-able)
xcomp(to-be-able, to-work)
~~~

When a modal verb combines with a nominal predicate linked by the copula _būti (“to be”)_, the nominal element is annotated as `xcomp`.

~~~ sdparse
Mama gali būti gera draugė . \n Mother can be a-good friend .
xcomp(gali, draugė)
cop(draugė, būti)
xcomp(can, friend)
cop(friend, be)
~~~

In Lithuanian, the `xcomp` relation is also used to annotate participles in complex verbal predicates when both the participial predicate and the matrix verb share the same subject.

~~~ sdparse
Ji sakė suprantanti . \n She said she-understands .
xcomp(sakė, suprantanti)
xcomp(said, she-understands)
~~~

The `xcomp` relation is also used to annotate obligatory secondary predicatives (i.e. predicative complements) of the main predicate. This includes the nominal or adjectival complement of a complex predicate with a “non-canonical” copular-like construction, such as verbs meaning _pretend, seem, become, act, feel_, etc. (e.g. _apsimesti “pretend”, atrodyti “seem”, darytis “become”, dėtis “act as if”, jaustis “feel”, (iš)likti “remain”, daryti / padaryti “make”, pasidaryti “become”, pasijusti “feel oneself”, pasirodyti / rodytis “appear/seem”, tapti “become"_).

~~~ sdparse
Mergaitė atrodė linksma . \n The-girl seemed cheerful .
xcomp(atrodė, linksma)
xcomp(seemed, cheerful)
~~~

~~~ sdparse
Katinas apsimeta miegąs . \n The-cat pretends to-be-sleeping .
xcomp(apsimeta, miegąs)
xcomp(pretends, to-be-sleeping)
~~~

~~~ sdparse
Jis pasijuto nejaukiai . \n He felt uncomfortable .
xcomp(pasijuto, nejaukiai)
xcomp(felt, uncomfortable)
~~~

The `xcomp` relation is also used to annotate nominal predicates in the instrumental case when they occur with the above-mentioned “non-canonical” copular-like verbs and with the verb _būti (“to be”)_.

~~~ sdparse
Jie apsimetė herojais . \n They pretended to-be-heores .
xcomp(apsimetė, herojais)
xcomp(pretended, to-be-heores)
~~~

~~~ sdparse
Tikintieji būdavo stebėtojais . \n The-believers used-to-be observers .
xcomp(būdavo, stebėtojais)
xcomp(used-to-be, observers)
~~~

The `xcomp` relation is also used with certain other verbs such as _(pa)skelbti (“declare”), (pa)skirti (“appoint”)_, and _įvardinti (“name”)_, when they take an obligatory secondary predicative complement.

~~~ sdparse
Skelbiu šį sąrašą baigtą . \n I-declare this list finished .
xcomp(skelbiu, baigtą)
xcomp(I-declare, finished)
~~~

~~~ sdparse
Atsakingas paskiriamas tas padalinys . \n That department is-appointed as-responsible .
xcomp(paskiriamas, atsakingas)
xcomp(is-appointed, as-responsible)
~~~

However, when the secondary predicative is expressed in the instrumental case, it is annotated as [obl:arg]() (oblique argument) rather than `xcomp`.

~~~ sdparse
Skelbiu šį sąrašą baigtu . \n I-declare this list finished .
obl:arg(skelbiu, baigtu)
obl:arg(I-declare, finished)
~~~

~~~ sdparse
Darbuotojai skiriami darbų vadovais . \n Employees are-appointed-as work supervisors .
obl:arg(skiriami, vadovais)
obl:arg(are-appointed-as, supervisors)
~~~

The `xcomp` relation is also used to annotate nominal predicates in the instrumental case when they occur with certain transitive verbs such as _(pri)versti (“force”), įpareigoti (“oblige”), prašyti (“ask”), raginti (“urge”), skatinti (“encourage”), kviesti (“invite”)_, as well as with the verb _būti (“to be”)_.

~~~ sdparse
Aš raginu visus būti supratingais . \n I urge everyone to-be understanding .
ccomp(raginu, būti)
xcomp(būti, supratingais)
ccomp(urge, to-be)
xcomp(to-be, understanding)
~~~

Contrast `xcomp` with other complement clauses where there is an overt subject or no obligatory control, which use [ccomp]():

~~~ sdparse
Jis sakė , kad tu mėgsti plaukioti . \n He said you like swimming .
ccomp(sakė, mėgsti)
xcomp(mėgsti, plaukioti)
ccomp(said, like)
xcomp(like, swimming)
~~~
