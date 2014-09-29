---
layout: base
title: 'nfincl'
shortdef: 'non-finite clause'
---

## nfincl: non-finite clause

The *nfincl* relation stands for "non-finite clause" and is used for participial and infinitival modifiers.

Modifiers labeled *nfincl* depend either on a noun (group “noun dependents”) or on a predicate (group “non-core dependents of clausal predicates”).


~~~ sdparse
Levi's based in San Francisco produces jeans.
nfincl(Levi's-1, based-2)
~~~

~~~ sdparse
Bill essaya de tirer démontrant son incompétence \n Bill tried to shoot demonstrating his incompetence
nfincl(tirer-4, démontrant-5)
~~~

