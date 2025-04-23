---
layout: feature
title: 'ExtPos'
shortdef: 'external POS'
udver: '2'
---

This feature indicates the effective UPOS of an expression when it differs from the UPOS of the head word.

In Classical Armenian, it is typical for heads of a [`fixed`](https://universaldependencies.org/en/dep/fixed.html) relation.

#### Examples

* ի ձեռն / i jeṙn “by means”, lit. “to hand”; the first node is [ADP](xcl-pos/PRON). 

~~~ sdparse
ասացաւ ի ձեռն Էսայայ \n was spoken by Esaias
fixed(ի, ձեռն)
case(Էսայայ, ի)
~~~