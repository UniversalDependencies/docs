---
layout: base
title:  'Core Dependents in UD v2'
---

# Core Dependents in UD v2

The UD taxonomy of syntactic relations rests on two fundamental distinctions that both have considerable support in the language typology literature (see Sections 5.1 and 5.4 of Croft's "Language Typology Meets Universal Dependencies"). The first is the distinction between three basic linguistic structures: clauses, noun phrases and modifier words. The second is the distinction between core arguments and oblique modifiers (where the latter include both non-core arguments and adjuncts). CHARACTERIZATION + NEED FOR GUIDELINES/TESTS + PASTE FROM CHRIS

, as I understand it, rests on the distinction between core arguments and obliques, which is commonly assumed in linguistic typology to be more surface oriented and therefore easier to maintain than the distinction between arguments and adjuncts. It starts from the assumption that all languages have some prototypical way of encoding the arguments of intransitive and transitive verbs, often referred to as S (for the subject of an intransitive verb), A (for the subject/agent of a transitive verb) and O or P (for the object/patient of a transitive verb). Exactly what this prototypical encoding is has to be established specifically for each language but it often involves some combination of case-marking (nominative-accusative or ergative-absolutive) and/or indexing on the verb (agreement) and/or linear position in the clause (typically relative to the verb). To this may be added the possibility to undergo certain grammatical transformations, such as relativization and passivization. The notion of core argument is then reserved for dependents of the verb that exhibit all or most of this prototypical encoding.

All other dependents of the verb are said to be oblique, which again may entail different things for different languages. In English, it means having a prepositional marker and/or occurring in a different position relative to the verb than core arguments. For example, “on her” in “I called on her” is oblique because it has a preposition, but “this morning” in “this morning I called on her” is oblique because it is not in subject position nor in object position and because it cannot be passivized. For case languages, obliques may either be accompanied by adpositions or occur in cases that are not prototypical for core arguments (often referred to as oblique cases). Exactly which cases are regarded as oblique can again vary between languages, and typical borderline cases are dative, partitive and (less common) genitive. Crucially, however, obliques can be arguments as well as adjuncts, as illustrated by the earlier English examples.

One issue that needs to be discussed is under what circumstances subjects can occur with oblique encoding. In Turkish subordinate clauses, for example, the verb is nominalized and the subject occurs in genitive instead of nominative. This is a completely regular grammatical process of complementation, and it occurs regardless of which verb is involved, so it seems well motivated to say that the genitive nominal is still the subject. By contrast, many languages express possession with a form of the verb “to be”, the thing owned in nominative and the possessor in an oblique case like dative. That is, instead of saying “X has Y”, they say “Y is to X”. In this case, there is no reason to say that the dative nominal is the subject, just because the corresponding nominal would be the subject in other languages. After all, it is precisely this kind of systematic difference between languages that we want to be able to study.

Finally, if we are going to (continue to) use this as the basis for the UD taxonomy, then we should probably require that the language-specific documentation describes how the core-oblique distinction has been applied for a given language and preferably also lists the prototypical encoding properties of core arguments. For example, in a language like Spanish, prepositions are used in the prototypical encoding of direct objects but only for animate objects with specific reference (“buscan una secretaria” vs. “buscan a una de las secretarias”).
## Objects

The problem of indirect objects (extended transitives). Keep distinction but make it non-universal.

## Valency-changing operations

Get rid of -pass, etc.

## Splitting the nmod relation

## To discuss

## Conclusion and recommendations

* Keep core-oblique distinction, work out more detailed guidelines
* Replace _dobj_ and _iobj_ by _obj_ with language-specific subtypes _obj:dir_ and _obj:ind_
* Remove _nsubjpass_ and _csubjpass_ and replace _auxpass_ by (optional) _aux:pass_
* Split _nomd_ into _anom_ and _advnom_

