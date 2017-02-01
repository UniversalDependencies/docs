---
layout: base
title:  'Syntax'
permalink: sv/overview/syntax.html
udver: '2'
---

# Syntax

The syntactic annotation in the Swedish UD treebanks follows the general guidelines but adds eight language-specific relations:

* _acl:relcl_ for relative clauses
* _aux:pass_ for passive auxiliaries 
* _compound:prt_ for verb particles
* _csubj:pass_ for clausal subjects of passive verbs
* _flat:name_ for exocentric complex names
* _nmod:poss_ for possessive/genitive modifiers
* _nsubj:pass_ for nominal subjects of passive verbs
* _obl:agent_ for agents of passive verbs

The syntactic annotation has been automatically converted from the original annotation schemes (the MAMBA annotation scheme in Talbanken for UD Swedish, and the LinES annotation scheme for UD Swedish-LinES). The conversions have been checked manually and corrected on a systematic basis, but a few minor deviations from the guidelines are known to remain. 

* For UD Swedish:
   * Comparative modifiers are sometimes not attached to the comparative element itself but to its head.
   * Absolute constructions are not annotated as clauses but as prepositional phrases with modifiers.

* For UD Swedish-LinES:
