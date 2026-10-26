# Rack Stock Management

English-language Android stock management app for approximately 250 racks, expandable as needed.

## Required workflow
- Two staff members use separate Android phones.
- Both devices share one cloud database; local-only storage is not sufficient.
- Receive stock with rack number, customer, party challan, dia/gauge, transaction ID, fabric type, count, brand, quantity and timestamp.
- Issue stock with quantity validation; available quantity decreases automatically.
- Preserve all receive/issue history even when available quantity reaches zero.
- Search by rack, customer, challan, fabric or transaction ID.
- Export reports for sharing (CSV/PDF/WhatsApp).
- Authenticated staff access, backups and sync/error handling.

## Important status
This repository is a project setup, not a finished or verified APK. Do not use it for real stock until cloud authentication, Firestore rules, synchronization and Android build have been configured and tested.

## Planned stack
- Web app packaged for Android using Capacitor.
- Firebase Authentication for staff sign-in.
- Cloud Firestore for shared stock and transaction history.
- GitHub Actions for repeatable APK builds.

## Cloud setup still required
A Firebase project and its web configuration are required. Never commit service-account secrets or private credentials. Firestore security rules must restrict access to authorized staff. Test concurrent receive/issue operations before using live inventory.
