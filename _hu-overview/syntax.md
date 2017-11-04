---
layout: base
title:  'Syntax'
permalink: hu/overview/syntax.html
---

# Syntax

The syntactic annotation in the Hungarian UD treebank was semi-automatically converted from the Szeged Dependency Treebank (Vincze et al. 2010), with an additional phase of manual refinement.

As for dependency relations and annotation principles, we apply the following language-specific extensions to the universal principles:

- nsubjpass and csubjpass: not applied in Hungarian
- ccomp: clausal objects are marked with ccomp:obj, clauses that express a core dependent of the main verb but are not objects are marked with ccomp:obl, and clauses that express a predicative dependent of the main verb are marked with ccomp:pred.
- xcomp: it is mainly used for infinitival complements.
- nmod: it denotes the head noun of postpositional phrases. nmod:att denotes nominal dependents of other nouns. nmod:obl denotes nominal dependents that bear a case marker different from accusative or dative.
- amod: adverbial uses of adjectives are marked with amod:mode. Other (attributive) uses of adjectives are marked with amod:att.
- advmod: we differentiate subtypes of adverbial modifiers according to the tridirectionality of Hungarian adverbs
- compound: multiword numerals are marked as compound: the last element is the head, and all the other elements are attached to the one to its right with the relation compound. compound:preverb holds between the preverb and its parent verb whenever they are spelt in two words.
- name: the last element is the head, and all the other elements are attached to the one to its right with the relation name
- mwe: not applied per se in Hungarian (but see language specific documentation for the treatment of light verb constructions)
- expl: not applied in Hungarian
- auxpass: not applied in Hungarian

References

Vincze, Veronika; Szauter, Dóra; Almási, Attila; Móra, György; Alexin, Zoltán; Csirik, János 2010: Hungarian Dependency Treebank. In: Proceedings of the Seventh Conference on International Language Resources and Evaluation (LREC’10), Valletta, Malta.
