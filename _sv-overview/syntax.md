---
layout: base
title:  'Syntax'
permalink: sv/overview/syntax.html
---

# Syntax

The syntactic annotation in the Swedish UD treebank follows the general guidelines but adds four language-specific relations:

* _acl:relcl_ for relative clauses
* _compound:prt_ for verb particles
* _nmod:agent_ for agents of passive verbs
* _nmod:poss_ for possessive/genitive modifiers

The syntactic annotation has been automatically converted from the original MAMBA annotation scheme in Talbanken. The following phenomena are known to deviate from the general guidelines and will be fixed in future versions:

* The _remnant_ analysis of ellipsis has not been fully implemented.
* Complex names with compositional internal structure are annotated in the same way as non-compositional cases.
* Comparative modifiers are sometimes not attached to the comparative element itself but to its head.
