---
layout: base
title:  'Vietnamese UD'
udver: '2'
---

# UD for Vietnamese <span class="flagspan"><img class="flag" src="../../flags/svg/VN.svg" /></span>

## Tokenization and Word Segmentation

* Most other languages use white spaces to separate words. However, Vietnamese puts spaces between syllables, not between words. A word can have one, two or more syllables. Therefore, the separation of words in Vietnamese is quite complicated because there are many ways to divide syllables into words, causing ambiguity.
Some examples of words in Vietnamese: đi (go), chơi (play), ăn (eat), danh sách (list), điện thoại (phone), ban nhạc (band), ....

## Morphology

### Tags


* Vietnamese uses 19 POS tags: N (Noun), Num (Numeral), Det (Determiner), V (Verb), Adj (Adjective), Pro (Pronoun), Adv (Adverb), Pre (Preposition), CC (Coordinating Conjunction), SC (Subordinating Conjunction), Prt (Particle), I (Interjection, Exclamation), Z (Bound morphemes), Y (Abbreviate/Acronymic), b (Borrowed words), FW (Foreign words), PUNCT (Punctuation), SYM (Symbol, Character). 

* Beside, Vietnamse has some subcategories: NNP (Proper noun), Nc (Classifier noun), Nu (Unit Noun), Nux (Extended unit noun), Numx (Extended numeral), AUX (Auxiliary Verb),.

* This corpus contains some lemmas tagged as determiners (DET): Bấy nhiêu, chút, các, hầu hết, mấy, mọi, mỗi, một chút, một nửa, một số, một vài, một ít, những, nửa, phần lớn, toàn, toàn bộ, toàn thể, tất cả, vài, vài ba, vô số, vô vàn, đa số, đôi, ...

* This corpus contains some lemmas tagged as auxiliaries (AUX): là, cần, có thể, phải, nên, ...

---

### Features

* Degree and Polarity
 ** Neg
*** ADV: không thể, không, không thể, chẳng


* Pronouns, Determiners, Quantifiers
** NUM: một, hai, ba, mỗi, 2, 10, năm, 20, 5, bốn
* Other Features


## Syntax

* This corpus uses lemma as copulas (cop). Examples: là.
* This corpus uses some lemmas as auxiliaries (aux). Examples: phải, có thể, Có lẽ, được, cần, nên,  ...

* This corpus uses some lemmas as passive auxiliaries (aux:pass),  Examples: được, bị, ...


## Treebanks

There is 1 Vietnamese UD treebank:

  * [vi-VTB](https://universaldependencies.org/treebanks/vi_vtb/index.html)


