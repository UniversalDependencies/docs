---
layout: base
title:  'Statistics of PronType in UD_Thai-PUD'
udver: '2'
---

## Treebank Statistics: UD_Thai-PUD: Features: `PronType`

This feature is universal.
It occurs with 7 different values: `Art`, `Dem`, `Ind`, `Int`, `Prs`, `Rel`, `Tot`.

1721 tokens (8%) have a non-empty value of `PronType`.
53 types (1%) occur at least once with a non-empty value of `PronType`.
53 lemmas (1%) occur at least once with a non-empty value of `PronType`.
The feature is used with 4 part-of-speech tags: <tt><a href="th_pud-pos-DET.html">DET</a></tt> (1027; 5% instances), <tt><a href="th_pud-pos-PRON.html">PRON</a></tt> (684; 3% instances), <tt><a href="th_pud-pos-PART.html">PART</a></tt> (8; 0% instances), <tt><a href="th_pud-pos-ADV.html">ADV</a></tt> (2; 0% instances).

### `DET`

1027 <tt><a href="th_pud-pos-DET.html">DET</a></tt> tokens (100% of all `DET` tokens) have a non-empty value of `PronType`.

`DET` tokens may have the following values of `PronType`:

* `Art` (11; 1% of non-empty `PronType`): เดอะ, อะ
* `Dem` (215; 21% of non-empty `PronType`): นี้, นั้น, ดังกล่าว, นั่น, นั้นเอง, นี่
* `Ind` (115; 11% of non-empty `PronType`): หลาย, อีก, บาง, ใด, เกือบ
* `Int` (1; 0% of non-empty `PronType`): อะไร
* `Rel` (616; 60% of non-empty `PronType`): ที่, ซึ่ง, อัน, ผู้, ไหน
* `Tot` (69; 7% of non-empty `PronType`): ทุก, ทั้ง, ทั้งหมด, แต่ละ, คนละ, ละ

`PronType` seems to be **lexical feature** of `DET`. 100% lemmas (25) occur only with one value of `PronType`.

### `PRON`

684 <tt><a href="th_pud-pos-PRON.html">PRON</a></tt> tokens (100% of all `PRON` tokens) have a non-empty value of `PronType`.

`PRON` tokens may have the following values of `PronType`:

* `Dem` (79; 12% of non-empty `PronType`): นี้, นี่, นั้น, นั่น, อื่น
* `Ind` (5; 1% of non-empty `PronType`): ต่าง
* `Int` (14; 2% of non-empty `PronType`): อะไร, ใคร, ไหน
* `Prs` (547; 80% of non-empty `PronType`): เขา, กัน, เธอ, เรา, ฉัน, มัน, พระองค์, ผม, คุณ, เอง
* `Rel` (38; 6% of non-empty `PronType`): ที่, ใคร, ไหน
* `Tot` (1; 0% of non-empty `PronType`): ทั้งหมด

<table>
  <tr><th>Paradigm <i>ใคร</i></th><th><tt>Int</tt></th><th><tt>Rel</tt></th></tr>
  <tr><td><tt></tt></td><td>ใคร</td><td>ใคร</td></tr>
</table>

`PronType` seems to be **lexical feature** of `PRON`. 93% lemmas (27) occur only with one value of `PronType`.

### `PART`

8 <tt><a href="th_pud-pos-PART.html">PART</a></tt> tokens (1% of all `PART` tokens) have a non-empty value of `PronType`.

The most frequent other feature values with which `PART` and `PronType` co-occurred: <tt><a href="th_pud-feat-Polarity.html">Polarity</a></tt><tt>=EMPTY</tt> (8; 100%).

`PART` tokens may have the following values of `PronType`:

* `Int` (8; 100% of non-empty `PronType`): หรือเปล่า, หรือไม่, เหรอ, หรือ, ไหม
* `EMPTY` (600): ไม่, ไป, มา, ขึ้น, ออก, ลง, เข้า, หรือไม่, หรอก, ความไม่

### `ADV`

2 <tt><a href="th_pud-pos-ADV.html">ADV</a></tt> tokens (0% of all `ADV` tokens) have a non-empty value of `PronType`.

`ADV` tokens may have the following values of `PronType`:

* `Int` (2; 100% of non-empty `PronType`): ทำไม, อย่างไร
* `EMPTY` (950): ก็, มาก, ที่สุด, ด้วย, ขึ้น, ไว้, ไป, กว่า, อีก, เลย

## Relations with Agreement in `PronType`

The 10 most frequent relations where parent and child node agree in `PronType`:
<tt>PRON --[<tt><a href="th_pud-dep-nsubj.html">nsubj</a></tt>]--> DET</tt> (3; 100%),
<tt>DET --[<tt><a href="th_pud-dep-det.html">det</a></tt>]--> DET</tt> (2; 67%),
<tt>PRON --[<tt><a href="th_pud-dep-compound.html">compound</a></tt>]--> PRON</tt> (2; 67%),
<tt>DET --[<tt><a href="th_pud-dep-conj.html">conj</a></tt>]--> DET</tt> (1; 100%),
<tt>PRON --[<tt><a href="th_pud-dep-advmod.html">advmod</a></tt>]--> DET</tt> (1; 100%),
<tt>PRON --[<tt><a href="th_pud-dep-conj.html">conj</a></tt>]--> PRON</tt> (1; 100%),
<tt>PRON --[<tt><a href="th_pud-dep-reparandum.html">reparandum</a></tt>]--> PRON</tt> (1; 100%).

