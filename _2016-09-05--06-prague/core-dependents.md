---
layout: base
title:  'Core Dependents in UD v2'
---

# Core Dependents in UD v2

The distinction between core arguments and oblique modifiers is at the heart of the UD taxonomy of syntactic relations but has been criticized because it is hard to apply cross-linguistically. For v2 we propose:

* Keep the core-oblique distinction and work out more detailed guidelines for how to apply it in different languages
* Replace the relations _dobj_ and _iobj_ by a single relation _obj_ (with language-specific subtypes _obj:dir_ and _obj:ind_)
* Remove the relations _nsubjpass_ and _csubjpass_ (and replace _auxpass_ by (optional) _aux:pass_)
* Split the modifier relation _nmod_ into two new relations _anom_ and _advnom_

Below we discuss and motivate each of these proposals in turn. We also list some remaining issues that need to be discussed in this area.

## Keep the core-oblique distinction

The core-oblique distinction is generally accepted in language typology as being both more relevant and easier to apply cross-linguistically than the argument-adjunct distinction. See, for example:

* Avery D. Andrews. 2007, ‘The major functions of the noun phrase’, in Timothy Shopen (ed.), Language Typology and Syntactic Description: Clause Structure (2nd ed), Cambridge University Press, Cambridge, United Kingdom, pp. 132-223. (1st edition, 1985.) http://s3.amazonaws.com/academia.edu.documents/1371104/3fssigyoao1m6zee.pdf?AWSAccessKeyId=AKIAJ56TQJRTWSMTNPEA&Expires=1473093407&Signature=s0ASGfswVey9XwxWo%2BgZmNHR%2F4w%3D&response-content-disposition=inline%3B%20filename%3DThe_Major_Functions_of_the_NP.pdf
* Sandra A. Thompson. 1997. Discourse Motivations for the Core-Oblique Distinction as a Language Universal. In Directions in Functional Linguistics edited by Akio Kamio.
* Wayan Arka: http://users.ox.ac.uk/~cpgl0015/Arka_Core_oblique_distinction_and_core_index_in_some_Austronesian_languages.pdf

The starting point is the assumption that all languages have some prototypical way of encoding the arguments of intransitive and transitive verbs, often referred to as S (for the subject of an intransitive verb), A (for the subject/agent of a transitive verb) and O or P (for the object/patient of a transitive verb). Exactly what this prototypical encoding is has to be established specifically for each language but it often involves some combination of case-marking (nominative-accusative or ergative-absolutive) and/or indexing on the verb (agreement) and/or linear position in the clause (typically relative to the verb). To this may be added the possibility to undergo certain grammatical transformations, such as relativization and passivization. The notion of core argument is then reserved for dependents of the verb that exhibit all or most of this prototypical encoding.

All other dependents of the verb are said to be oblique, which again may entail different things for different languages. In English, it means having a prepositional marker and/or occurring in a different position relative to the verb than core arguments. For example, “on her” in “I called on her” is oblique because it has a preposition, but “this morning” in “this morning I called on her” is oblique because it is not in subject position nor in object position and because it cannot be passivized. For case languages, obliques may either be accompanied by adpositions or occur in cases that are not prototypical for core arguments (often referred to as oblique cases). Exactly which cases are regarded as oblique can again vary between languages, and typical borderline cases are dative, partitive and (less common) genitive. Crucially, however, obliques can be arguments as well as adjuncts, as illustrated by the earlier English examples. Note also that a specific linguistic property, such as the presence of an adpositional marker, cannot be considered as a universally valid criterion for obliqueness. In a language like Spanish, for example, prepositions are used in the prototypical encoding of direct objects but only for animate objects with specific reference (“buscan una secretaria” vs. “buscan a una de las secretarias”).

The criteria for drawing the core-oblique distinction will thus have to be established specifically for each language and should be described in the language-specific documentation. The universal guidelines should help by providing general guidance on the kind of criteria and test that can be applicable. Here is a list to start with:

* Pronominalization: In many languages, personal pronouns are restricted to core arguments. For example, "this morning" cannot be replace by the personal pronoun "it" in "this morning I called on her" (only by a pronominal adverb like "then").
* Interrogatives: A similar test can be applied by turning a sentence into a wh-question. The question corresponding to "She went to Paris" is "Where did she go?" not "What did she go?".
* Relativization: Languages that use relative clauses often restrict relativization to core arguments.
* Valency-changing operations: Passivization can be used to establish that French does not have core indirect objects: "Le cadeau a été donné à la fille" vs. "*La fille a été donnée le cadeau".
* Agreement: If verbs show morphosyntactic agreement at all in a language, this is usually restricted to core arguments (predominantly subjects but also objects in some languages).

## Objects

The problem of indirect objects (extended transitives). Keep distinction but make it non-universal.

## Valency-changing operations

Get rid of -pass, etc.

## Splitting the nmod relation

## To discuss

* Non-canonical subjects: One issue that needs to be discussed is under what circumstances subjects can occur with oblique encoding. In Turkish subordinate clauses, for example, the verb is nominalized and the subject occurs in genitive instead of nominative. This is a completely regular grammatical process of complementation, and it occurs regardless of which verb is involved, so it seems well motivated to say that the genitive nominal is still the subject. By contrast, many languages express possession with a form of the verb “to be”, the thing owned in nominative and the possessor in an oblique case like dative. That is, instead of saying “X has Y”, they say “Y is to X”. In this case, there is no reason to say that the dative nominal is the subject, just because the corresponding nominal would be the subject in other languages. After all, it is precisely this kind of systematic difference between languages that we want to be able to study.

