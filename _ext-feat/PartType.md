---
layout: feature
title: 'PartType'
shortdef: 'particle type'
---

Types of particles found in various tagsets. I am merely presenting
here what I have in Interset now. We will have to make it match our
new definition of particles.

### Mod: modal particle

Examples: [bg] май (possibly), нека (let), [cs] ať, kéž, nechť (let)

### Emp: particle of emphasis

Examples: [bg] даже (even)

### Res: particle of response

Examples: yes, no

### Inf: infinitive marker

Did we say that these are subordinating conjunctions?

If so, do we want to have this feature value in "conjtype"?

Examples: [en] to, [de] zu, [da] at, [sv] att

### Vbp: separated verb prefix in German

They are analogous to verbal particles in other Germanic languages,
which again overlap with adpositions and adverbs. Do we want to tag
them as adpositions/adverbs and add this feature?  Examples: [de] vor
(in "stellen Sie sich vor")

Besides these, various languages have also question particles (they
cause the sentence to be question, i.e. thye are a sort of pronounced
question marks) and negative particles (English "not", German "nicht"
etc.; some people would say that these are adverbs). I have been
abusing "prontype" values "int" and "neg" to capture these two types
in Interset but I am not particularly happy with that, as prontype
otherwise applies to different class of words. So if we keep the
"PartType" feature, we may want to also add the "int" and "neg" values
here.
