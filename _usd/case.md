---
layout: base
title: 'case'
shortdef: 'case marking'
---

## case: case marking


The *case* relation is used for any case-marking element (including prepositions, postpositions, and clitic case markers). Case-marking elements are treated as dependents of the noun or clause it attaches to or introduces. Thus, contrary to SD, USD abandons treating a preposition as a mediator between a modified word and its object. The *case* relation aims at providing a uniform analysis of prepositions and case in morphologically rich languages.

<div class="sd-parse">
the Chair 's office
det(Chair-2, the-1)
nmod(office-4, Chair-2)
case(Chair-2, 's-3)
</div>

<div class="sd-parse">
the office of the Chair
det(office-2, the-1)
nmod(office-2, Chair-5)
case(Chair-5, of-3)
det(Chair-5, the-4)
</div>

French:
<div class="sd-parse">
le bureau du président \n the office of the_Chair
det(bureau, le)
nmod(bureau, président)
case(président, du)
</div>


Hebrew:
<div class="sd-parse">
wkfraiti/VERB at/PRT-ACC hsrj/NOUN \n and_when_I_saw ACC the_movie
dobj(wkfraiti-1, hsrj-3)
case(hsrj-3, at-2)
</div>


When case markers are morphemes, they are not divided off the noun as a separate case dependent, but the noun as a whole is analyzed as a *nmod* of the verb. To overtly mark case, POS tags are included in the representation as shown below on a Russian example. We use the universal POS tagset from Petrov et al. (2012) to which we append case information.

<div class="sd-parse">
Ya/NOUN-NOM napisal/VERB pis'mo/NOUN-ACC perom/NOUN-INSTR \n I wrote the_letter with_a_quill
nsubj(napisal-2, Ya-1)
dobj(napisal-2, pis'mo-3)
nmod(napisal-2, perom-4)
</div>


This treatment provides parallelism between different constructions
across and within languages. A good result is that we now have greater
parallelism between prepositional phrases and subordinate clauses,
which are in practice often introduced by a preposition:

<div class="sd-parse">
Sue left after the rehearsal
nsubj(left-2, Sue-1)
nmod(left-2, rehearsal-5)
det(rehearsal-5, the-4)
case(rehearsal-5, after-3)
</div>

<div class="sd-parse">
Sue left after we did
nsubj(left-2, Sue-1)
advcl(left-2, did-5)
mark(did-5, after-3)
nsubj(did-5, we-4)
</div>

We also obtain parallel constructions for


- the possessive alternation

<div class="sd-parse">
the Chair 's office
det(Chair-2, the-1)
nmod(office-4, Chair-2)
case(Chair-2, 's-3)
</div>

<div class="sd-parse">
the office of the Chair
det(office-2, the-1)
nmod(office-2, Chair-5)
case(Chair-5, of-3)
det(Chair-5, the-4)
</div>


- variant forms with case, a preposition or a
postposition in Finnish

<div class="sd-parse">
etsiä ilman johtolankaa \n to_search without clue.PARTITIVE
nmod(etsiä, johtolankaa)
case(johtolankaa, ilman)
</div>

<div class="sd-parse">
etsiä taskulampun kanssa \n to_search torch.GENITIVE with
nmod(etsiä, taskulampun)
case(taskulampun, kanssa)
</div>

<div class="sd-parse">
etsiä johtolangatta \n to_search clue.ABESSIVE
nmod(etsiä, johtolangatta)
</div>


- the dative alternation where the prepositional construction gets a similar
analysis to the double object construction

<div class="sd-parse">
give the children the toys
dobj(give, toys)
iobj(give, children)
</div>

<div class="sd-parse">
give the toys to the children
dobj(give, toys)
nmod(give, children)
case(children, to)
</div>

<div class="sd-parse">
donner les_jouets aux enfants \n give the_toys to_the children
dobj(donner-1, les_jouets-2)
nmod(donner-1, enfants-4)
case(enfants-4, aux-3)
</div>

Another advantage of this new analysis is that it provides a treatment
of prepositional phrases that are predicative complements of "be" that is consistent with the treatment of nominal predicative
complements:

<div class="sd-parse">
Sue is in shape
nsubj(shape-4, Sue-1)
cop(shape-4, is-2)
case(shape-4, in-3)
</div>

Stacked prepositions, such as *out of* are regarded as some form of *mwe*:

<div class="sd-parse">
Out of all this , something good will come.
</div>

<div class="sd-parse">
Out of all this ... come
mwe(Out-1, of-2)
predet(this-4, all-3)
case(this-4, Out-1)
nmod(come-6, this-4)
</div>
