---
layout: postag
title: 'SYM'
shortdef: 'symbol'
---

### Definition

A symbol is a word-like entity that differs from ordinary words by form, function, or both.
What makes them different from [punctuation](PUNCT)　is that they can be substituted by normal words.
This involves all currency symbols, e.g. _￥100_ is identical to _hundres yen_.
These words are tagged with `symbol` / 記号 or `supplementary_symbol` / 補助記号 in UniDic.

Puntuations are classified into [PUNCT](), while they also have `supplementary_symbol` / 補助記号 tag,
they are distinguished by the subcategories of UniDic POS,
e.g. `supplementary_symbol (period)` / 補助記号-句点.

Mathematical operators form another group of symbols.

Another group of symbols is emoticon and emoji including 
ascii art symbols tagged with `supplementary_symbol(ascii_art.emoticon)` / 補助記号-ＡＡ-顔文字 in UniDic.

### Examples

- _$, %, §, ©_
- _+, −, ×, ÷, =, <, >_  `supplementary_symbol(general)` /  補助記号-一般
- :), (*^o^*), (゜∀゜)   `supplementary_symbol(ascii_art.emoticon)` / 補助記号-ＡＡ-顔文字 
