---
layout: base
title:  'Core Dependents in UD v2'
---

# Core Dependents in UD v2

The distinction between core arguments and oblique modifiers is at the heart of the UD taxonomy of syntactic relations but has been criticized because it is hard to apply cross-linguistically. For v2 we propose:

* Keep the core-oblique distinction and work out more detailed guidelines for how to apply it in different languages
* Replace the relations [u-dep/dobj]() and [u-dep/iobj]() by a single relation **obj** and add a language-specific subtype  **obj:ind** to be used for indirect objects in languages that allow extended transitive clauses.
* Remove the relations [u-dep/nsubjpass]() and [u-dep/csubjpass]() and add language-specific subtypes **nsubj:pass** and **csubj:pass**. (By analogy, the functional relation **auxpass** will be removed and the subtype **aux:pass** added.
* Split the modifier relation [u-dep/nmod]() into two new relations **anom** and **advnom**

Below we discuss and motivate each of these proposals in turn. 

## Keep the core-oblique distinction

The core-oblique distinction is generally accepted in language typology as being both more relevant and easier to apply cross-linguistically than the argument-adjunct distinction. See, for example:

* Avery D. Andrews. 2007. The Major Functions of the Noun Phrase. In Timothy Shopen (ed.) Language Typology and Syntactic Description: Clause Structure (2nd ed), Cambridge University Press, Cambridge, United Kingdom, pp. 132-223. (1st edition, 1985.)
* Sandra A. Thompson. 1997. Discourse Motivations for the Core-Oblique Distinction as a Language Universal. In Akio Kamio (ed.) Directions in Functional Linguistics. Benjamins, Amsterdam, the Netherlands, pp. 59-82.

The starting point is the assumption that all languages have some prototypical way of encoding the arguments of intransitive and transitive verbs, often referred to as S (for the subject of an intransitive verb), A (for the subject/agent of a transitive verb) and O or P (for the object/patient of a transitive verb). Exactly what this prototypical encoding is has to be established specifically for each language but it often involves some combination of case-marking (nominative-accusative or ergative-absolutive) and/or indexing on the verb (agreement) and/or linear position in the clause (typically relative to the verb). To this may be added the possibility to undergo certain grammatical transformations, such as relativization and passivization. The notion of core argument is then reserved for dependents of the verb that exhibit all or most of this prototypical encoding.

All other dependents of the verb are said to be oblique, which again may entail different things for different languages. In English, it means having a prepositional marker and/or occurring in a different position relative to the verb than core arguments. For example:

<div id="s1" class="sd-parse">
this morning I called on her
nsubj(called, I)
nmod(called, her)
case(her, on)
nmod(called, morning)
det(morning, this)
</div>

Here “on her” is oblique because it has a preposition and “this morning” is oblique because it is neither in subject position nor in object position and because it cannot be passivized. For case languages, obliques may either be accompanied by adpositions or occur in cases that are not prototypical for core arguments (often referred to as oblique cases). Exactly which cases are regarded as oblique can again vary between languages, and typical borderline cases are dative, partitive and (less common) genitive. Crucially, however, obliques can be arguments as well as adjuncts, as illustrated by "on her" (argument) and "this morning" (adjunct) above. Note also that a specific linguistic property, such as the presence of an adpositional marker, cannot be considered as a universally valid criterion for obliqueness. In a language like Spanish, for example, prepositions are used in the prototypical encoding of direct objects but only for animate objects with specific reference. For example:

<div id="s2" class="sd-parse">
buscan una secretaria \n they seek a secretary
dobj(buscan, secretaria)
det(secretaria, una)
</div>
<div id="s3" class="sd-parse">
buscan a una de las secretarias \n they seek one of the secretaries
dobj(buscan, una)
case(una, a)
nmod(una, secretarias)
det(secretarias, las)
case(secretarias, de)
</div>

The criteria for drawing the core-oblique distinction will thus have to be established specifically for each language and should be described in the language-specific documentation. The universal guidelines should help by providing general guidance on the kind of criteria and test that can be applicable. Here is a list to start with:

* Personal pronouns: In many languages, personal pronouns are restricted to core arguments. For example, "this morning" cannot be replaced by the personal pronoun "it" above (only by a pronominal adverb like "then").
* Interrogatives: The question corresponding to "she went to Paris" is "where did she go?" not "what did she go?".
* Relativization: Languages that use relative clauses often restrict relativization to core arguments.
* Passivization: In many languages, only core arguments can be passivized.
* Agreement: Morphosyntactic agreement on verbs is usually restricted to core arguments (predominantly subjects but also objects in some languages).

## Merge direct and indirect objects

Some languages allow extended transitive clauses with a third participant encoded as a core argument, usually with some kind of benefactive or recipient role, as in the English double-object construction:

<div id="s4" class="sd-parse">
Mary gave John a book
nsubj(gave, Mary)
dobj(gave, book)
det(book, a)
iobj(gave, John)
</div>

Other languages do not allow extended transitive clauses but can still express the same semantic content with the help of an oblique modifier, as in French:

<div id="s5" class="sd-parse">
Marie a donné un livre à Jean
nsubj(donné, Marie)
aux(donné, a)
dobj(donné, livre)
det(livre, un)
nmod(donné, Jean)
case(Jean, à)
</div>

The indirect object relation ([u-dep/iobj]()) in UD has always been intended to cover the first case only, that is, it applies to the third core argument in an extended transitive clause. It was never intended to apply to the recipient role of a three-place predicate no matter how expressed, because syntactic relations should never be identified with specific semantic roles. This is why we have also insisted that the alternative syntactic structure associated with a three-place predicate like "give" in English does _not_ have an indirect object, because only two of the participants are realized as core arguments:

<div id="s6" class="sd-parse">
Mary gave a book to John
nsubj(gave, Mary)
dobj(gave, book)
det(book, a)
nmod(gave, John)
case(John, to)
</div>

In line with our overall decision to keep the core-oblique distinction, we should also continue to make a distinction between true indirect objects (realized as core arguments) and oblique modifiers realizing a similar semantic role. However, because not all languages allow extended transitives, we think it will be more correct (and less confusing) to make this distinction using language-specific subtypes. We therefore recommend that the (current) universal relations [u-dep/dobj]() and [u-dep/iobj]() are replaced by a single universal relation **obj** (for object). In languages with extended transitives, the language-specific subtype **obj:ind** should be used for indirect objects, while direct objects are still labeled **obj** (with no subtype). This convention brings out the fact that indirect objects are typologically marked.

## Remove special relations for passive subjects

The current guidelines distinguish [u-dep/nsubjpass](), [u-dep/csubjpass](), and [u-dep/auxpass]() from [u-dep/nsubj](), [u-dep/csubj]() and [u-dep/aux]() to capture the fact that the subject of a passive has a different role than the subject of the corresponding active verb. While this is useful for many NLP applications of UD, it goes against the general spirit in UD of annotating syntactic functions rather than semantic roles. A possible counterargument is that passive is a grammaticalized process and therefore part of syntax, but it seems we should then treat other valency-changing operations like causative and antipassive in the same way. Not only would this lead to a proliferation of grammatical relations, it would also go against the lexicalist stance in UD, which seems to favor a lexicalist analysis of these operations (as in LFG, for example).

Our proposal is therefore that we replace the universal relations [u-dep/nsubjpass]() and [u-dep/csubjpass]() by the language-specific subtypes **nsubj:pass** and **csubj:pass**. Regardless of whether the subtypes are used or not, information about valency-changing operations can be annotated on the predicate. If the valency-changing operation is encoded morphologically (either as inflection or as derivation), it can be encoded using a morphological feature like Voice=Pass or Voice=Caus. If it is encoded periphrastically, this option is not directly applicable and we therefore
propose to preserve the information encoded in the [u-dep/auxpass]() relation, but to make it a language-specific option, hence **aux:pass**. This also opens up for relations like **aux:caus** for languages that have a periphrastic causative construction. 

<div id="s8" class="sd-parse">
she was invited to the party
nsubj:pass(invited, she)
aux:pass(invited, was)
nmod(invited, party)
det(party, the)
case(party, to)
</div>

## Split the nmod relation into anom and advnom

One of the cornerstones of the UD taxonomy of syntactic relations is the distinction between three main types of linguistic structures: clauses, nominals and modifier words. These structures can in turn be used to modify either predicates or nominals. For modifier words and clauses we use different syntactic relations for these two cases:

* [u-dep/amod]()/[u-dep/acl]() is used for a modifier/clause that attaches to a nominal
* [u-dep/advmod]()/[u-dep/advcl]() is used for a modifier/clause dependent to a predicate (or adjective or adverb)

But in the case of nominals, the [u-dep/nmod]() has to double duty and cover both adnominal and adverbial uses of
nominals. Compare the following examples:

<div id="s9" class="sd-parse">
the red car
amod(car, red)
</div>

<div id="s10" class="sd-parse">
the car that is red
acl(car, red)
</div>

<div id="s11" class="sd-parse">
the car in the street
nmod(car, street)
</div>

<div id="s12" class="sd-parse">
they ran quickly
advmod(ran, quickly)
</div>

<div id="s13" class="sd-parse">
they ran when the bell sounded
advcl(ran, sounded)
</div>

<div id="s14" class="sd-parse">
they ran to the forest
nmod(ran, forest)
</div>

This is problematic especially in nominal clauses, where the category of the head does not disambiguate
between the two uses.

<div id="s15" class="sd-parse">
she is a doctor of medicine
nmod(doctor, medicine)
</div>

<div id="s16" class="sd-parse">
she is a doctor at the hospital
nmod(doctor, hospital)
</div>

We therefore propose that the [u-dep/nmod]() relation is split into two relations, one for adnominal and one for adverbial modification. We propose the names **anom** for the former and **advnom** for the latter. In this way, all modifier relations will satisfy the following pattern:

* Adnominal modifiers are named aX, where X is cl (clause), nom (nominal) or modifier word (mod).
* Adverbial modifiers are named advX, where X is cl (clause), nom (nominal) or modifier word (mod).


