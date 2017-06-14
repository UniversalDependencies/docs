---
layout: relation
title: 'conj:dicto'
shortdef: 'spoken overridden disfluency '
udver: '2'
---

In FrenchSpoken the `conj:dicto` relation is used instead of [reparandum]() to indicate disfluencies overridden in a speech repair. Contrary to `reparandum`, in the `conj:dicto` relation the disfluency is the head and the repair is the dependent.
Using `conj:dicto` instead of `reparandum` enables us to better reflect how the utterance was produced by a speaker since we stay closer to the order in which the words were enonciated.

Example from FrenchSpoken:

~~~ sdparse
c'est des choses dont vous parlez dans en classe euh \n
conj:dicto(dans, en)
case(classe, dans)
~~~

N.B.: with `reparandum`, "en" would have been the dependent of "classe", instead of "dans" 

~~~ sdparse
c'est des choses dont vous parlez dans en classe euh \n
reparandum(en, dans)
case(classe, en)
~~~
