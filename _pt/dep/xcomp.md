---
layout: relation
title: 'xcomp'
shortdef: 'open clausal complement'
---

An open clausal complement (`xcomp`) of a verb or an adjective is a
predicative or clausal complement without its own subject. The
reference of the subject is necessarily determined by an argument
external to the xcomp (normally by the object of the next higher
clause, if there is one, or else by the subject of the next higher
clause). This is often referred to as *obligatory control*. 
These clauses tend to be non-finite in many languages, 
but they can be finite as well. The name `xcomp` is
borrowed from Lexical-Functional Grammar.

~~~ sdparse
Dois árbitros resolveram contar todos os podres.
xcomp(resolveram, contar)
~~~

~~~ sdparse
Os três continentes mais obstinados em cortar o reinado de Havelange.
xcomp(obstinados, cortar)
~~~

~~~ sdparse
Volpi foi dos mais influentes pintores do país.
xcomp(foi, pintores)
~~~

~~~ sdparse
Disse que não conseguia vislumbrar artifícios fraudulentos.
xcomp(conseguia, vislumbrar)
ccomp(Disse, conseguia)
~~~

~~~ sdparse
Mas me considero um piloto rápido.
xcomp(considero, piloto)
~~~

~~~ sdparse
Nós esperamos que eles mudem de idéia.
xcomp(esperamos, mudem)
~~~

Note that the above condition “without its own subject” does not mean
that a clause is an `xcomp` just because its subject is not _overt._
The subject must be necessarily inherited from a fixed position in the
higher clause. That is, there should be no available interpretation
where the subject of the lower clause may be distinct from the
specified role of the upper clause. In cases where the missing subject
may or must be distinct from a fixed role in the higher clause,
`ccomp` should be used instead, as below.  This includes cases of
arbitrary subjects and anaphoric control.

~~~ sdparse
O chefe disse para começar a cavar.
ccomp(disse, começar)
~~~

Pro-drop languages, as Portuguese, have clauses where the subject is
not present as a separate word, yet it is inherently present (and
often deducible from the form of the verb) and it does not depend on
arguments from a higher clause.

~~~ sdparse
O tomate foi projetado para manter o sabor
advcl(projetado, manter)
~~~

~~~ sdparse
Os empresários abriram mão de posições históricas , eventualmente visando sua proteção , para construir e defender idéias 
nsubj(abriram, empresários)
advcl(abriram, visando)
advcl(abriram, construir)
conj(construir, defender)
~~~

### Secondary Predicates

The `xcomp` relation is also used in constructions that are known as
_secondary predicates_ or _predicatives_.  Examples:

- _Ela declarou o bolo lindo._
- _Ela declarou o bolo um sucesso._

We could paraphrase the sentence using a subordinate clause: _Ela
declarou que o bolo estava lindo._ There are two predicates mixed in
one clause: 1. ela declarou algo, and 2. o bolo estava lindo (segundo
ela).  The secondary predicate will be attached to the main predicate
as an `xcomp`:

~~~ sdparse
Ela declarou o bolo lindo .
nsubj(declarou, Ela)
dobj(declarou, bolo)
xcomp(declarou, lindo)
nsubj(lindo, bolo)
~~~

In the enhanced representation, there is an additional subject link
showing the secondary predication (_bolo_ is the subject of _lindo_.

Remember that `xcomp` is used for core arguments of clausal predicates
so it will not be used for other instances of secondary predication.
For instance, in _Ela entrou na sala triste_ we also have a double
predication (ela entrou na sala; ela estava triste).  But _triste_ is
not a core argument of _entrar:_ leaving it out will neither affect
grammaticality nor significantly alter the meaning of the verb.  On
the other hand, leaving out _lindo_ in _ela declarou o bolo lindo_
will either render the sentence ungrammatical or lead to a different
interpretation of _declarou._

The result is that in _Ela entrou na sala triste,_ _triste_ will
depend on _Ela_ and the relation will be [acl]() instead of `xcomp`.
<!-- Interlanguage links updated Út zář 29 20:32:03 CEST 2020 -->
