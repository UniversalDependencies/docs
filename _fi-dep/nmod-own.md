---
layout: base
title:  'nmod:own'
shortdef : 'haver'
---

## {{ page.title }}: {{ page.shortdef }} <a name="sec-omistus"></a>

In Finnish, there is no equivalent for the verb *have*. Rather, *having* is expressed using the verb *olla*, *to be*. For instance, the meaning of the sentence *I have a pen* would be expressed in Finnish by *Minulla on kynä*, literally *"At me is a pen"*. In TDT, these so called *possessive clauses* (omistuslause)  are analyzed as a subtype to *existential clauses*, (eksistentiaalilause)  making the thing had (*kynä* in the previous example) the subject. 

<!-- TODO For more information on special cases of subjects, see Section [subj-obj](#sec-subj-obj). -->

This kind of an analysis would naturally result in the *haver* being
marked as a nominal modifier, [nmod](). However, as `nmod` is a very
frequent dependency type that encodes many different meanings, the
information that the clause is about having or owning would be
lost. Therefore, the Finnish-specific SD scheme introduces a separate
dependency type for nominal modifiers that encode owning, 
{{ page.title }}. The governor of the dependency is the verb *olla*, and
the dependent is the haver or owner, which is required to be in the
*adessive* case. The haver must also be an animate being or a group of
animate beings.

<!-- fname:omistus.pdf -->
~~~ sdparse
Matilla on uusi auto . \n At_Matti is new car .
nmod:own(on-2, Matilla-1)
nsubj(on-2, auto-4)
amod(auto-4, uusi-3)
punct(on-2, .-5)
~~~
