---
layout: base
title:  'Uppsala Meeting'
---

# UD meeting in Uppsala, August 23, 2015

## Group reports

### 1. [Coordination and names](2015-08-23-uppsala/coordination.html) (#1, #9)

### 2. [Copula and cleft sentences](2015-08-23-uppsala/copula.html) (#2, #3)

### 3. [Determiners and pronouns](2015-08-23-uppsala/determiners.html) (#4)

### 4. [Ellipsis](2015-08-23-uppsala/ellipsis.html) (#5)

### 5. [MWE including LVC and MW abbr](2015-08-23-uppsala/mwe.html) (#6, #7, #8)

### 6. [Particles and adpositions](2015-08-23-uppsala/particles.html) (#10, #16)

### 7. [Tokenization](2015-08-23-uppsala/tokenization.html) (#11)

### 8. [Clitics and reflexive pronouns](2015-08-23-uppsala/clitics.html) (#12, #17)

### 9. [Conversion best practice and tools](2015-08-23-uppsala/conversion.html) (#13, #15)

### 10. [Future of UD: enhanced + semantics](2015-08-23-uppsala/future.html) (#14)

## Future work

Based on the group reports, issues can be sorted into two groups:

1. Short-term: issues that were (more or less) settled and can be fixed without modifying the current guidelines.
2. Long-term: issues that need more discussion and/or are (more or less) likely to require modifications to the universal guidelines.

### Short-term issues

1. Coordination: the relation [u-dep/conj]() is always left-to-right (head-initial).
2. Names: the relation [u-dep/name]() is always left-to-right (head-initial).
3. Infinitive markers: the relation should be [u-dep/mark]() (not [u-dep/aux]()); the postag may vary depending on language but [u-pos/PART]() is the default.
4. Verb particles: the relation should be [u-dep/compound]() (optionally with subtype "prt"), not [u-dep/mark]().
5. Reflexives: the relation should be [u-dep/dobj](), [u-dep/iobj]() or [u-dep/expl]() (not [u-dep/compound]()). (For inherent reflexives, [u-dep/expl]() should be used; see the discussion in that relations documentation.)
6. Determiners: the relation [u-dep/det]() is (for now) compatible with [u-pos/DET](), [u-pos/PRON]() and [u-pos/ADJ](), but not with [u-pos/NOUN](), [u-pos/PROPN]() and [u-pos/NUM]().
7. Multiword abbreviations: abbreviations without spaces (such as "etc." or "e.g.") should not be split into their components; when several abbreviated words form a phrase, the usual principles apply, that is, we prefer a compositional analysis and resort to the [u-dep/mwe]() only when such an analysis would be arbitrary and misleading.
8. Compounds: the relation [u-dep/compound]() should only be used for X<sup>0</sup> compounding, not for (other types of) multiword expressions.
9. Single root: in every tree there is just one node with the `root` dependency relation. If there is no clear main constituent because of ellipsis, the leftmost orphan is promoted to the head position and the other orphans are attached to it.
10. Dates: in day-month-year expressions, the year always depends on the month; the month depends on the day if this is indicated by case marking, otherwise the day depends on the month; the relations should be [u-dep/nummod]() if numerical, otherwise [u-dep/nmod]() or [u-dep/amod]() depending on whether the dependents have nominal or adjectival form. 

### Long-term issues

1. Word segmentation: we need to review our principles for word segmentation to make sure that we can deal both with languages where whitespace does not separate words (such as Vietnamese) and with languages where words need to be segmented into smaller units that wouldn't traditionally be called words although they are larger than morphemes (such as Turkish).

2. Syntax-semantics mismatch: we need a consistent treatment of constructions where semantic interpretation deviates systematically from surface syntactic structure, including (but not limited to) light verb constructions, idioms, copula constructions, and clefts.

3. Part-of-speech tags: we need a consistent treatment of part-of-speech tags along the formal-functional dimension, including (but not limited to) determiners vs. pronouns, nouns vs. adjectives, adverbs vs. adjectives, and particles such as question particles and negation.

4. Ellipsis: we need a comprehensive treatment of ellipsis that eliminates the [u-dep/remnant]() relation but (ideally) avoids empty elements, possibly based on a generalization of promotion (which is needed anyway).

5. Core arguments: we need to sort out the exact criteria for distinguishing different core arguments, including the distinction between [u-dep/dobj]() and [u-dep/iobj](), the use of the [u-dep/expl]() relation, and the treatment of pro-drop, clitic doubling, and dislocation.

6. Enhanced dependencies: we need guidelines for the enhanced dependencies, which can potentially play a role in resolving all the previous long-term issues.



