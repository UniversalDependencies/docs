---
layout: base
title:  'Language-specific subtypes and syntactic features in UD v2'
---

# Language-specific subtypes and features in UD v2

Whereas the morphological annotation layers allows an arbitrary number of features (universal or language-specific) on top of the universal part-of-speech tags, the syntactic annotation is limited to universal syntactic relations and language-specific subtypes of these. (In addition, there is the enhanced representation, which allows additional relations to be added but does not really provide a mechanism for subclassifying basic syntactic relations.) This has led to a situation where subtypes are used to encode a rather heterogeneous set of distinctions with very little consistency across treebanks. Moreover, because only one level of subtyping is allowed, there is a blocking effect such that, if a treebank uses subtypes for one dimension (say, LVC-hood), it cannot encode any other dimension (at least not for one and the same relation). For v2 we therefore propose two changes:

* Subtyping should be restricted to proper subclassification of syntactic relations 
* Other types of information that is currently encoded in subtypes should instead be expressed as **syntactic features**, which requires an extension of the current standard

# Syntactic subtypes

The following (existing) subtypes are plausible candidates for proper syntactic subtypes:

* acl:relcl - a relative clause is a special type of [u-dep/acl](), normally with a characteristic syntactic structure (with relativization of a major clause participant)
* advcl:compar - a comparative clause is a special type of [u-dep/advcl](), which again has a characteristic syntactic structure (introduced by a marker such as "as" or "than") and furthermore puts syntactic constraints on the matrix clause (a function word such as "as" or "more" that correlates with the marker); other possible subtypes of [u-dep/advcl]() could come from the traditional subclassification of adverbial clauses as conditional, temporal, consecutive, and so on.
* 
# Syntactic features
