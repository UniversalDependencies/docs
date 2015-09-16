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
3. Infinitive markers: the syntactic relation should be [u-dep/mark]() (not [u-dep/aux]()); the postag may vary depending on language but [u-pus/PART]() is the default.
4. Verb particles: the syntactic relation should be [u-dep/compound]() (or [u-dep/compound:prt]()).
5. Reflexives: the syntactic relation should be [u-dep/dobj](), [u-dep/iobj]() or [u-dep/expl]() (not [u-dep/compound]()).
6. Determiners: the syntactic relation [u-dep/det]() is (for now) compatible with [u-pos/DET](), [u-pos/PRON]() and [u-pos/ADJ], but not with [u-pos/NOUN](), [u-pos/PNOUN]() and [u-pos/NUM].
7. Multiword abbreviations: if abbreviations like "e.g." are split into two words, the [u-dep/mwe()] relation should be used.
8. Compounds: the relation [u-dep/compound] should only be used for X<sup>0</sup> compounding, not for (other types of) multiword expressions.

### Long-term issues

TODO
