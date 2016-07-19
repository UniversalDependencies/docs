---
layout: base
title:  'Core Dependents in UD v2'
---

# Core Dependents in UD v2

The distinction between core dependents and the rest is fundamental to the whole taxonomy.
Having specific and cross-linguistically consistent guidelines for core dependents is therefore
crucial for putting the whole enterprise on a solid footing. This involves clarifying the
treatment of (among other things) double objects, reflexives, expletives, copula constructions
and valency-changing operations.
Relevant reports from the Uppsala meeting includes:
[copula](../2015-08-23-uppsala/copula.html),
[clitics](../2015-08-23-uppsala/clitics.html).

## What are core arguments?

**Dan's proposal:** The UD guidelines depend heavily on the notion of [core arguments](/u/overview/syntax.html#core-arguments-vs-oblique-modifiers), yet they lack a good definition of core arguments. (They just say that the distinction is “fairly clear”, which I disagree with.) What are the tests to distinguish a core argument from a non-core one? We say that we avoid distinguishing arguments from adjuncts because the borderline is fuzzy and semantic role labeling is difficult. Distinguishing core arguments from other arguments and adjuncts is supposed to be easier, but without the definition it isn't.

In English UD, arguments that use prepositions are considered _oblique_, i.e. non-core. As a result, _John_ is indirect object ([iobj](/u/dep/iobj.html)) in _I gave John the book_ but only a modifier ([nmod](/u/dep/nmod.html)) in _I gave the book to John_, although the two sentences do not differ semantically and the syntactic difference is rather minimal (swapped word order and one preposition). The mere presence of a preposition cannot destroy the “coreness” of the argument, definitely not cross-linguistically. (After all we like to claim that adpositions and case affixes are the same thing, don't we?) So in other UD treebanks we may encounter objects with prepositions.

Dan's note: Natalia told me that the idea was that a core argument must use a coding strategy that is never used for adjuncts in the given language. I find it too restrictive. It may be acceptable in English (although I'm not particularly happy with the _John_ inconsistency mentioned above). But in other languages it would wipe out core arguments completely. In Czech, even the accusative case (which is arguably the most widely used coding of a direct object) would be excluded because it is also used for temporal adjuncts. Not to mention that the Czech grammar denotes noun phrases in various other morphological cases (with or without prepositions) as objects.

If there is no good, exact and cross-linguistically applicable rule (and I would be surprised if it existed), maybe we can increase the degree of freedom here and come up with a set of less sharply described principles and recommendations? For example, if the most natural way of querying the dependent is using interrogative adverbs such as _where, when, how, why,_ the dependent is adjunct and thus `nmod` or `advmod` (or `advcl`). If the query uses interrogative pronoun (_who, whom, what, on what_) AND an adverb is not suitable, we probably have a (core?) argument, i.e. `nsubj`, `dobj`, `iobj`. Hence, _on Saturday_ would be `nmod` in _I'm leaving on Saturday_ (when?) but `dobj` in _I rely on Saturday_ (what on?) It is quite likely that there are tough border cases in all languages. But I like this approach better than the vacuum we have now, and definitely better than banning prepositions.

**Joakim's comment on Dan's proposal:** I like the question test, but I would like to apply it somewhat differently (at least for Swedish). I would say that core dependents are those that can be questioned by "who" and "what" _alone_ (that is, without a preposition). This test is good also in that it allows us to distinguish bare nominals that are _not_ core depenents, such as "80 kilos" in "he weighs 80 kilos". At least in Swedish, you would not be able to ask "what does he weigh?", only "how much does he weigh?". Am I right in assuming that the same would be true for the use of accusative nominals as temporal modifiers? That is, would it be the case here as well that you would use "when" or "for how long", rather than "what" in questions? — **Dan:** Yes. And your example with 80 kilos would also work in Czech the same way (asking _how much_ but not _what_). **Nathan:** _What does he weigh?_ is fine in English. Across languages, there will inevitably all kinds of lexically-specific divergences in argument structure and argument marking. An English example I like is _look at_: you can look *at* something (or *for* something), and you can see something or watch something, but you can't look something. (It is tempting to treat _look at_ as a multiword verb because it has a holistic semantics, but syntactically, _at_ still heads a PP.) The preposition is obligatory in questioning its complement (*_What did you look?_), but not in questioning the circumstances of the event (_Where did you look?_). I recently gave [a talk about prepositional verbs](http://www.cs.cmu.edu/~nschneid/prepv-slides.pdf) which pointed out (slide 25) that for some idiomatic verbs, the preposition is mandatory in circumstantial questions as well (_I came across a nice restaurant._ → _When did you come across it?_/#_When did you come?_).

So why do I insist that prepositions are crucial? Because for a language like Swedish it gives an almost razor sharp distinction. By contrast, if we try to draw the distinction between complements and adjuncts (where prepositional phrases can be either), it is hopelessly muddled. For example, take a sentence like "she slipped on the sidewalk". Can you say "what did she slip on?", or do you have to say "where did she slip?" I suppose the latter is more natural in most cases, but the former definitely seems possible. So is "on the sidewalk" dobj or nmod? I would say it is clearly nmod and this falls out naturally with the ban on prepositions. So before giving up this idea, I would like to know whether there is any way of making this work for other languages too, not necessarily by banning prepositions in all languages but by looking for corresponding clues in other languages. **Dan on the sidewalk example:** That's why I would only try to ask _what on_ if I cannot ask _where_. Here I apparently can ask _where_, so it is an `nmod`. But I don't say my approach is razor sharp and I guess you could eventually bring up an example that I could not solve satisfactorily. On the other hand, my approach more or less follows the way syntax is taught in Czech elementary schools, and how it distinguishes “objects” from “adverbials” (where a noun phrase can be an “adverbial” too; you could as well say arguments and adjuncts). We have this distinction in the Czech data, so I have to choose one of possible ways: 1. abandon it (but I don't like losing information); 2. keep it, but separate from the basic UD representation (i.e. language-specific `nmod:arg`, enhanced or MISC); 3. adjust the Czech-specific definition of core arguments so that all our “objects” fit in the core (the current solution; but at the expense of cross-linguistic compatibility). There are phrases that are clearly adjuncts (like most temporal and locational modifiers). There are others that are less clear, which is why UD (but not Czech UD) currently avoids the argument-adjunct distinction. And there are yet others that are clearly arguments – not necessarily obligatory, whatever that means, but nevertheless their encoding and meaning is defined by the verb. Even the patient role may be encoded by non-accusative case, with or without preposition.
  - **Nathan:** A possible counterexample: _The recipe takes **an hour**_ (unmarked NP—I'd call it `dobj`) → _How long does it take?_ (*_Who/what does it take_)

**Joakim's thoughts on an alternative proposal:**
The UD taxonomy, as I understand it, rests on the distinction between _core arguments_ and _obliques_,
which is commonly assumed in linguistic typology to be more surface oriented and therefore easier to
maintain than the distinction between _arguments_ and _adjuncts_. It starts from the assumption that all
languages have some prototypical way of encoding the arguments of intransitive and transitive verbs, often
referred to as S (for the subject of an intransitive verb), A (for the subject/agent of a transitive verb)
and O or P (for the object/patient of a transitive verb). Exactly what this prototypical encoding is has
to be established specifically for each language but it often involves some combination of case-marking
(nominative-accusative or ergative-absolutive) and/or indexing on the verb (agreement) and/or linear
position in the clause (typically relative to the verb). To this may be added the possibility to undergo
certain grammatical transformations, such as relativization and passivization. The notion of core argument
is then reserved for dependents of the verb that exhibit all or most of this prototypical encoding.

All other dependents of the verb are said to be oblique, which again may entail different things for
different languages. In English, it means having a prepositional marker and/or occurring in a different
position relative to the verb than core arguments. For example, "on her" in "I called on her" is oblique
because it has a preposition, but "this morning" in "this morning I called on her" is oblique because
it is not in subject position nor in object position and because it cannot be passivized. For case
languages, obliques may either be accompanied by adpositions or occur in cases that are not prototypical
for core arguments (often referred to as oblique cases). Exactly which cases are regarded as oblique can
again vary between languages, and typical borderline cases are dative, partitive and (less common)
genitive. Crucially, however, obliques can be arguments as well as adjuncts, as illustrated by the
earlier English examples.

One issue that needs to be discussed is under what circumstances subjects can occur with oblique encoding.
In Turkish subordinate clauses, for example, the verb is nominalized and the subject occurs in genitive
instead of nominative. This is a completely regular grammatical process of complementation, and it occurs
regardless of which verb is involved, so it seems well motivated to say that the genitive nominal is
still the subject. By contrast, many languages express possession with a form of the verb "to be", the
thing owned in nominative and the possessor in an oblique case like dative. That is, instead of saying
"X has Y", they say "Y is to X". In this case, there is no reason to say that the dative nominal is the
subject, just because the corresponding nominal would be the subject in other languages. After all, it is
precisely this kind of systematic difference between languages that we want to be able to study.

Finally, if we are going to (continue to) use this as the basis for the UD taxonomy, then we should
probably require that the language-specific documentation describes how the core-oblique distinction
has been applied for a given language and preferably also lists the prototypical encoding properties of
core arguments. For example, in a language like Spanish, prepositions are used in the prototypical
encoding of direct objects but only for animate objects with specific reference ("buscan una secretaria" vs.
"buscan a una de las secretarias").

**Dan's comment:** Some people would say that indirect objects are not core arguments (John Sylak-Glassman, draft 2 of UniMorph). That seems a bit more consistent to me. We would distinguish just the S, A, P roles and everything else. We would have `[nc]subj` (=S+A) and `dobj` (=P) but not `iobj` – that would be just `nmod`, or alternatively, in languages where it makes sense, `nmod:iobj`.

**Nathan:** For English, the only clear-cut syntactic distinctions (it seems to me) are whether the argument is marked with a preposition or not, and if not, whether it occurs in subject/object position or is adverbial. So I'm fine with the current nominal argument distinctions of `nsubj`, `dobj`, `iobj` (core); `nmod`, `nmod:tmod` (oblique); and  `expl` (not a true argument). It doesn't bother me that an argument that is core in one language can be oblique in a paraphrase or translation (this seems inevitable). In languages with case, are there any cases that are considered borderline between core and oblique?

## Valency-changing operations

**Joakim's proposal:** The current guidelines distinguish [u-dep/nsubjpass](), [u-dep/csubjpass](), and [u-dep/auxpass]() from [u-dep/nsubj](), [u-dep/csubj]() and [u-dep/aux]() to capture the fact that the subject of a passive has a different role than the subject of the corresponding active verb. While I can clearly see the usefulness of this convention for many IE-type practical applications, it seems to go against the general spirit in UD of annotating syntactic functions rather than semantic roles. A possible counterargument would be that passive is a grammaticalized process and therefore part of syntax, but the counter-counterargument to this is that the same should then be true of causative, antipassive, etc. in many languages. First of all, I don't think we want a proliferation of grammatical relations like "dobjcaus", etc. Secondly, I think the lexicalist stance in UD actually speaks in favor of a lexicalist account of these operations (as in LFG, for example). My proposal is therefore that we get rid of [u-dep/nsubjpass](), [u-dep/csubjpass](), and [u-dep/auxpass]() and instead treat all valency-changing operations as derivations (which we have agreed to do for Turkish causatives, for example). If we want to capture the grammatically regular shifts in valency, we can do so (optionally) in the enhanced dependencies. See examples for passive in English and causative in Japanese below. (I am unsure what relations should be used for the "deep" relations, so I just put "dobj:prom" [for "promoted dobj"] and "nsubj:dem" [for "demoted nsubj" for now].) An alternative approach would be to make [u-dep/nsubjpass]() a language-specific subtype (thus, "nsubj:pass"). In this way, treebanks that don't make this distinction (and I think we have a significant number) would be legitimate, and languages that don't have a passive wouldn't have to worry about it. Languages that have a grammaticalized causative could conceivable add "dobj:caus", etc. This is in many ways a simpler solution, but I am afraid we would be overloading the language-specific relations with too many distinctions.

<div id="s1a" class="sd-parse">
The cat chased the dog .
nsubj(chased, cat)
dobj(chased, dog)
</div>

<div id="s1b" class="sd-parse">
The dog was chased by the cat .
nsubj(chased, dog)
nmod(chased, cat)
dobj:prom(chased, dog)
nsubj:dem(chased, cat)

</div>
<div id="s1c" class="sd-parse">
The dog was chased from the room .
nsubj(chased, dog)
dobj:prom(chased, dog)
nmod(chased, room)
</div>

<div id="s2" class="sd-parse">
Kanako ga Ziroo o ikaseta . \n Kanako made Ziro go .
nsubj(ikaseta, Kanako)
dobj(ikaseta, Ziroo)
nsubj:dem(ikaseta, Ziroo)
</div>




