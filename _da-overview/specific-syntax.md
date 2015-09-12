---
layout: base
title:  'Syntax'
permalink: da/overview/specific-syntax.html
---

# Specific constructions

This document is a placeholder for the language-specific overview of
guidelines for specific constructions.

~~~sdparse
DET NOUN VERB DET NOUN CONJ NOUN PUNCT
X(NOUN-2, DET-1)
X(VERB, NOUN-2)
X(VERB, CONJ)
X(CONJ, DET-4)
X(CONJ, NOUN-5)
X(CONJ, NOUN-7)
~~~

~~~sdparse
DET NOUN VERB DET NOUN CONJ NOUN PUNCT
X(DET-1, NOUN-2)
X(VERB, DET-1)
X(VERB, DET-4)
X(DET-4, NOUN-5)
X(NOUN-5, CONJ)
X(CONJ, NOUN-7)
~~~

~~~sdparse
DET NOUN VERB DET NOUN CONJ NOUN PUNCT
X(NOUN-2, DET-1)
X(VERB, NOUN-2)
X(VERB, NOUN-5)
X(NOUN-5, DET-4)
X(NOUN-5, NOUN-7)
X(NOUN-7, CONJ)
~~~
