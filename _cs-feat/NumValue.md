---
layout: feature
title: 'NumValue'
shortdef: 'numeric value'
---

In Czech, number “one” agrees with the counted noun in [Gender](), [Number]()
and [Case](). Number “two” agrees in gender and case and numbers “three”
and “four” agree in case. These numerals behave similarly to
adjectives. Numbers “five”, “six” etc. behave differently. If the case
of the counted phrase is genitive, dative, locative or instrumental,
the numeral agrees in case with the noun. However, if the case of the
whole phrase is nominative, accusative or vocative, then the numeral
dictates that the noun is in genitive. This behavior is similar to
nouns modified by other nouns in genitive. (Note that this is why in
the Czech PDT some numeral nodes are annotated as governing nouns
instead of modifying them.) In addition, the whole phrase (number + counted noun)
together behaves as neuter singular (this is important for subject-verb agreement).

Specific behavior of low-value numerals is the reason why there is a separate feature
to mark these numerals.

### 1: numeric value 1

* _jeden, jedna, jedno_ “one”

### 2: numeric value 2

* _dva, dvě_ “two”

### 3: numeric value 3 or 4

* _tři_ “three”, _čtyři_ “four”
