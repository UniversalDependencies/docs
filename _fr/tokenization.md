---
layout: base
title:  'Tokenization'
udver: '2'
---

# Tokenization

The French tokenization follows the universal guidelines: contractions are undone (e.g., *au* becomes two tokens *à* + *le*).
Otherwise the tokenization is based on white spaces and punctuations (except for multiword expressions with hyphens which are not split, e.g., *Etats-Unis* "United States", *sous-marin* "submarine" stay one token).

In the table below, numbers indicate how many words are used to represent the example given in the first column.

| | GSD | FTB | PUD | ParTUT | Sequoia | Spoken |
|----|:----:|:----:|:----:|:----:|:----:|:----:|:----:|
| Proper names (`Saint-Denis`) | **1** | **3** | **1** | **1** | **1** |  **3** |
| Common nouns (`procès-verbal`) | **1** | **3** | **1** | **3** / **1**<sup>A</sup> | **1** |  **3** |
| Common nouns (`vice-président`) | **1** | **3** | **1** | **3** | **1** |  **3** |
| Pronoun (`celui-ci`, `elle-même`) | **1** | **3** | **1** | **1**  | **1** |  **3** |
| Adverb (`peut-être`; `ci-dessous`) | **1** | **3** | **1** | **1** | **1** |  **3** |
| Determinant (`trente-six`) | **1** | **3** | **1** | **None** | **1** | **1** |
| `-t-il` | **2** | **1** | **2** | **None** | **2** | **4** |
| `-il` (dans `fait-il`) | **1** | **1** | **1** | **1** | **1** | **2** |
| `c'est-à-dire` | **1** | **6** | **None** | **1** | **1** | **6** |

A: maybe 3 (_procès-verbal_) or 1 (_sud-est_)

## Tokenization in FrenchSpoken
FrenchSpoken does a strictly formal tokenizing where the hyphens are considered as tokens.
This means that, in a sentence like  _A-t-elle bien dormi ?_,  there are five tokens in _a-t-elle_: _a_, _-_, _t_, _-_ and _elle_.
The first hyphen is the head (i.e. it receives the link `nsubj`) and the other tokens are linked with a `goeswith`:

~~~ sdparse
a - t - elle bien dormi ? \n did she sleep well?
nsubj(a,-)
goeswith(-,t)
goeswith(--2,--4)
goeswith(-,elle)
~~~

As for the POS, the hyphens could be tagged with PUNCT and the _t_ with PART (and of course _elle_ with PRON).
This way of tokanizing and segmentating seems easier for the parsing and does not require an external source since we keep everything separated.	We also don't have to wonder where to attach the hyphens as they constitute separated tokens.
Thus it becomes easier to automatically analyze together cases like _là-dessus_ and _là-bas_ where the hyphen belongs to the left part (_là-_ and _dessus_ or _bas_) and cases like _est-elle_ where we can choose to attach the hyphen to the right part (_-elle_).

N.B.: This tokenizing and segmentating choice is arbitrary and other French treebanks could choose to do otherwise (for example they could consider _a-t-_ or _-t-elle_ as a token, or annotate the _-t-_ with `expl`).
