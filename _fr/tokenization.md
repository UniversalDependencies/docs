---
layout: base
title:  'Tokenization'
udver: '2'
---

# Tokenization

The French tokenization follows the universal guidelines: contractions are undone (e.g., *au* becomes two tokens *à* + *le*).
Otherwise the tokenization is based on white spaces and punctuations (except for symbols *-* and *'* which are not split when they are in a named entity and a single word (*Etats-Unis*, *sous-marin* or *aujourd'hui* are not split).

When the symbol *-* is used between two different syntactic unit, the *-* is kept with the second part (usually a pronoun). Ex: *vient-il* &rarr; *vient* + *-il*.
The quote symbol (*'*) is kept with the previous part. Ex: *l'école* &rarr; *l'* + *école* and *j'arrive* &rarr; *j'* + *arrive*.


