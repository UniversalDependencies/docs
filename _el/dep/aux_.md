---
layout: relation
title: 'aux'
shortdef: 'auxiliary'
# The filename "aux" is not allowed on Windows, so we redirect instead
# (see https://github.com/UniversalDependencies/docs/issues/20)
redirect_from: "el/dep/aux.html"
---

We use the `aux` relation for:

- forms of the auxiliary verb _έχω_ in periphrastic tenses. 

~~~ sdparse
έχουν πάει
aux(πάει, έχουν)
~~~

~~~ sdparse
είχαν πάει
aux(πάει, είχαν)
~~~

- the subjunctive particles  *να* and *ας*

~~~ sdparse
ας αρχίσουν να γράφουν
aux(αρχίσουν, ας)
aux(γράφουν, να)
~~~

- the future particle *θα*

~~~ sdparse
θα τον έχω συναντήσει μέχρι τη Δευτέρα
aux(συναντήσει, θα)
aux(συναντήσει, έχω)
dobj(συναντήσει, τον)
~~~

- the impersonal verb *πρέπει* expressing obligation and probability

~~~ sdparse
θα πρέπει να τον συναντήσω 
aux(συναντήσω, θα)
aux(συναντήσω, πρέπει)
aux(συναντήσω, να)
dobj(συναντήσω, τον)
~~~

~~~ sdparse
πρέπει να τον έχει δει
aux(δει, πρέπει)
aux(δει, έχει)
aux(δει, να)
dobj(δει, τον)
~~~

- the impersonal verb *μπορεί* when expressing possibility. 

~~~ sdparse
μπορεί να τον έχουν δει 
aux(δει, μπορεί)
aux(δει, έχουν)
aux(δει, να)
dobj(δει, τον)
~~~

The personal verb *μπορώ* expressing ability or permission should be treated as a regular verb.

~~~ sdparse
μπορεί να φάει
xcomp(μπορεί, φάει)
aux(φάει, να)
~~~

Negative particles  *δεν* and *μην* are assigned the relation [neg](neg).

<!--
TODO 
Include φαίνεται πρόκειται?
-->
<!-- Interlanguage links updated Út zář 29 20:31:43 CEST 2020 -->
