---
layout: postag
title: 'ADP'
shortdef: 'adposition'
---

### Definition

Adposition is a cover term for prepositions and postpositions.
In Italian, there are only _prepositions_.

Italian prepositions can take the form of fixed multi-word
expressions, such as _invece di_ "instead of", _a causa di_ "because of", _davanti a_ "in front of". The
component words are then still tagged according to their basic use
(i.e. _a_ is `ADP`, _causa_ is [NOUN](), _di_ is `ADP`) and their status as a
multi-word expression is accounted for at the level of syntactic annotation.
See [fixed]() for more details on the representation of multi-word expressions.

Italian prepositions are also used for introducing non-finite clausal complements, as in _Maria ha deciso <b>di</b> partire_ "Mary decided to leave" or _Maria è andata <b>a</b> congratularsi con loro_ "Mary went to congratulate them".

Italian distinguishes between simple and articulated prepositions: note however that to comply with the UD [Tokenization]() guidelines the latter are systematically splitted into the following sequence of part-of-speech tags, `ADP` and `DET` (e.g. _nello_ "in the" is splitted into _in_ `ADP` _lo_ `DET`).

###Corresponding language-specific part-of-speech tags

E:  Preposition 

### Examples

- _<b>in</b> casa_ "at home"
- _<b>a</b> Milano_ "in Milan"
- _<b>durante</b> la notte_ "during the night"
- _<b>davanti al</b> cancello_ "in front of the gate"
- _ha promesso <b>di</b> invitarlo a cena_ "he promised to invite him to dinner"
<!-- Interlanguage links updated Čt lis 12 09:42:49 CET 2020 -->
