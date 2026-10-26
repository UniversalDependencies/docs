---
layout: postag
title: 'SYM'
shortdef: 'symbol'
udver: '2'
---

### Definition

A symbol is a word-like entity that differs from ordinary words by form, function, or both.

Many symbols are or contain special non-alphanumeric characters, similarly to [punctuation](PUNCT). What makes them different from
punctuation is that they can be substituted by normal words. This involves all currency symbols, e.g. _֏ 70_ is equivalent to _եօթանասուն դրամ_/_eòt’anasown dram_ "seventy-five Armenian drams".

Mathematical operators form another group of symbols.

Another group of symbols is emoticons and emoji.

Strings that consist entirely of alphanumeric characters are not symbols but may be tagged `PROPN`: _130XE_, _DC10_; other strings may be tagged as `PROPN` (rather than `SYM`) even if they contain special characters: _ՏՈՒ-154Մ_ ("Tu-154M"). Similarly, abbreviations for single words are not symbols but are assigned the part of speech of the full form. For example, _պրն_ (պարոն "Mr.; Mister"), _կգ_ (կիլոգրամ "kg; kilogram"), _կմ_ (կիլոմետր "km; kilometer") should be tagged as `NOUN`. Acronyms for proper names such as _ՄԱԿ_ "UN" and _ՆԱՏՕ_ "NATO" should be tagged as `PROPN`.

Characters used as bullets in itemized lists _(•, ‣)_ are not symbols, they are punctuation.

### Examples

- _$, %, §, ©, F, C_
- _+, −, ×, ÷, =, <, >_
- :), ♥‿♥, 😝, ։Ճ
- _john.doe@universal.org_, _https://us02web.zoom.us/j/87386495798_, _zndoog.com_
<!-- Interlanguage links updated Po 29. června 2026, 18:10:22 CEST -->
