/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';
/**
 * Write your transction processor functions here
 */

/**
 * Sample transaction
 * @param {org.example.biznet.sendMessage} sampleTransaction
 * @transaction
 */
async function sendMessage(tx) {
    // Save the old value of the asset.
    const message = tx.message.content;

    // Update the asset with the new value.
    tx.message.content = tx.content;

    // Get the asset registry for the asset.
    const assetRegistry = await getAssetRegistry('org.example.biznet.Message');
    // Update the asset in the asset registry.
    await assetRegistry.update(tx.message);

    // Emit an event for the modified asset.
    let event = getFactory().newEvent('org.example.biznet', 'messageEvent');
    event.content = tx.content;
    event.receiver = tx.receiver;
    event.sender = tx.sender;
    emit(event);
}
