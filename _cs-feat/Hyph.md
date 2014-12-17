---
layout: feature
title: 'Hyph'
shortdef: 'hyphenated compound or part of it'
---

Boolean feature. Is this the first part of a hyphenated compound?

Compound adjectives with hyphens, such as _česko-slovenský&nbsp;_ “Czech-Slovak” get split during
tokenization. The last part, _slovenský,&nbsp;_ is an independent adjective with full inflection
paradigm. However, the first part, _česko,&nbsp;_ is a form that does not occur elsewhere than in
compounds (the independent form would be _český_).

### Yes: it is part of hyphenated compound

#### Examples

* _<b>česko</b>-slovenský&nbsp;_ “Czecho-Slovak”
