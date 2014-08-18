---
layout: base
title:  'Universal Dependencies --- test notes'
---

## Dependency Structure: General Principles

- Dependency relations hold primarily between content words.
- Function words attach as direct dependents of the most closely related content word.
- When a content word is elided, a function word may be promoted to stand in for the content word.
- In structures that do not have a transparent internal structure all non-initial elements depend on the initial one.

<div class="sd-parse">
Kennedy has been killed
auxpass(killed, been)
</div>



<div class="sd-parse">
Kennedy was killed
auxpass(killed, was)
</div>



<div class="sd-parse">
Kennedy got killed
auxpass(killed, got)
</div>

 
