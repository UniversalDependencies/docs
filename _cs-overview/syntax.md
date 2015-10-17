---
layout: base
title:  'Syntax'
permalink: cs/overview/syntax.html
---

# Syntax

The tree structure and dependency relation labels in the Czech data have been obtained
by an automatic transformation of the PDT trees,
using dedicated scenarios within the
<a href="http://ufal.mff.cuni.cz/treex">Treex</a> NLP framework.

Several [language-specific subtypes](../dep/index.html)
of the [universal dependency relations](../../u/dep/index.html) have been defined
to preserve the information encoded in the original treebank.

~~~ conllu
# give the toys to the children
1     donner    donner   VERB   _   VerbForm=Inf               0   root   _   give
2     les       le       DET    _   Definite=Def|Number=Plur   3   det    _   the
3     jouets    jouet    NOUN   _   Gender=Masc|Number=Plur    1   dobj   _   toys
4-5   aux       _        _      _   _                          _   _      _   _
4     au        au       ADP    _   _                          6   case   _   to
5     les       le       DET    _   Definite=Def|Number=Plur   6   det    _   the
6     enfants   enfant   NOUN   _   Gender=Masc|Number=Plur    1   nmod   _   children

# now the parallel English tree
1     give       donner   VERB   _   VerbForm=Inf               0   root   _   give
2     the        le       DET    _   Definite=Def|Number=Plur   3   det    _   the
3     toys       jouet    NOUN   _   Gender=Masc|Number=Plur    1   dobj   _   toys
4     to         au       ADP    _   _                          6   case   _   to
5     the        le       DET    _   Definite=Def|Number=Plur   6   det    _   the
6     children   enfant   NOUN   _   Gender=Masc|Number=Plur    1   nmod   _   children
~~~
