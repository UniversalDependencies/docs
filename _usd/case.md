---
layout: base
title: 'case'
shortdef: 'case marking'
---

## case: case marking

(from LREC paper)

A major proposed change from the extant versions of SD is a new
treatment of prepositions to provide a uniform analysis of
prepositions and case in morphologically rich languages. The analysis
we chose is to push all the way the design principle of having direct
links between content words. We abandon treating a preposition as a
mediator between a modified word and its object, and, instead, any
case-marking element (including prepositions, postpositions, and
clitic case markers) will be treated as a dependent of the noun it
attaches to or introduces. The proposed analysis is shown in (2):
*nmod* labels the relation between the two content words, whereas the
preposition is now viewed as a *case* depending on its complement. In
general, *nmod* expresses some form of oblique or adjunct relation
further specified by the *case*.

[TODO example numbering]

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

<div class="sd-parse">
le bureau du président \n the office of the_Chair
det(bureau, le)
nmod(bureau, président)
case(président, du)
</div>

The treatment of case marking is illustrated in (3). In (3a), *at* in
Hebrew is a separate token indicating an accusative object: the case
marker depends on the object. In (3c), we show the analysis when case
markers are morphemes. The case morpheme is not divided off the noun
as a separate *case* dependent, but the noun as a whole is analyzed as
a *nmod* of the verb. To overtly mark case, we include POS tags in the
representation as shown in (3b) and (3d). We use the universal POS
tagset from Petrov et al. (2012) to which we append case information.

<div class="sd-parse">
wkfraiti/VERB at/PRT-ACC hsrj/NOUN \n and_when_I_saw ACC the_movie
dobj(wkfraiti-1, hsrj-3)
case(hsrj-3, at-2)
</div>

<div class="sd-parse">
Ya/NOUN-NOM napisal/VERB pis'mo/NOUN-ACC perom/NOUN-INSTR \n I wrote the_letter with_a_quill
nsubj(napisal-2, Ya-1)
dobj(napisal-2, pis'mo-3)
nmod(napisal-2, perom-4)
</div>

This treatment provides parallelism between different constructions
across and within languages. A good result is that we now have greater
parallelism between prepositional phrases and subordinate clauses,
which are in practice often introduced by a preposition, as in (4).

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

We also obtain parallel constructions for the possessive alternation
as shown in (2), for variant forms with case, a preposition or a
postposition in Finnish, as shown in (5), and for the dative
alternation where the prepositional construction gets a similar
analysis to the double object construction, see (6).

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
of prepositional phrases that are predicative complements of "be" as
in (7) that is consistent with the treatment of nominal predicative
complements, as in (1).

<div class="sd-parse">
Sue is in shape
nsubj(shape-4, Sue-1)
cop(shape-4, is-2)
case(shape-4, in-3)
</div>

[TODO does this next paragraph belong here?]

SD is a surface syntactic representation, which does not represent
semantic roles. The semantic roles of modifiers are hard to categorize
and hard to determine. We feel that there is a lot of use for a
representation which works solely in terms of the overt role-marking
resources of each language. This is supported by many rich
language-particular traditions of grammatical analysis, whether via
Sanskrit cases or the case particles on Japanese *bunsetsu*.

Prepositions sometimes introduce a clause as their complement, e.g.,
(8a). Following the principle that dependencies do mark where new
clauses are introduced, this relation should have a different name
from *nmod*, and we suggest calling it *ncmod* "nominalized clause
modifier". Under the proposed new analysis, the head of the modifier
of *data* will be *upset*. The result will be the analysis in (8b).

<div class="sd-parse">
We have no data about whether users are upset.
</div>

<div class="sd-parse">
data about whether users are upset
ncmod(data-1, upset-6)
case(upset-6, about-2)
mark(upset-6, whether-3)
nsubj(upset-6, users-4)
cop(upset-6, are-5)
</div>

Another issue is what analysis to give to cases of stacked
prepositions, such as *out of*. Our proposal is that all such cases
should be regarded as some form of *mwe*, as in (9b).

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
